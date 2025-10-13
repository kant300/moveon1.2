package web.service;

import au.com.bytecode.opencsv.CSVReader;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.stereotype.Service;

import java.io.*;
import java.nio.charset.Charset;
import java.time.Duration;
import java.util.*;

@Service
public class StationService {
    // CSV 파일을 읽어서 데이터 가져오기
    public List<Map<String, String>> getCsvData() {
        try {
            // 데이터 파일 경로
            String path = "src/main/resources/static/data/인천교통공사_엘리베이터_에스컬레이터 설치현황_20250630.csv";
            FileReader fileReader = new FileReader(path, Charset.forName("EUC-KR"));
            CSVReader csvReader = new CSVReader(fileReader);
            List<String[]> csvData = csvReader.readAll();
            List<Map<String, String>> csvList = new ArrayList<>();

            for (int i=1; i<csvData.size(); i++) {
                String[] row = csvData.get(i);
                Map<String, String> item = new LinkedHashMap<>();

                // CSV 데이터에서 뒷부분의 '역' 제거
                row[1] = row[1].replace("역", "");
                // 위도, 경도 값 체크 (값이 없으면 스킵)
                if (row[7].isEmpty() || row[8].isEmpty()) continue;

                // 확인용 코드
                // System.out.printf("역사 : %s, 장비종류 : %s, 호기 : %s, 위도 : %s, 경도 : %s\n",
                //         row[1], row[2], row[3], row[7], row[8]);

                // 얻은 데이터로 리스트 만들기
                item.put("역사", row[1]);
                item.put("장비", row[2].equals("ES")?"에스컬레이터":"엘리베이터");
                item.put("호기", row[3]);
                item.put("위도", row[7]);
                item.put("경도", row[8]);
                item.put("상태", "운행중");
                csvList.add(item);
            }
            csvReader.close();
            return csvList;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // 고장현황 사이트 스크래핑
    // !! 요청을 너무 많이, 자주 보내지 않도록 주의할 것 !!
    public List<Map<String, String>> getWebData() {
        // 웹사이트 크롤링 시 새 창을 띄우지 않도록 설정
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless=new", "--disable-gpu");
        WebDriver driver = new ChromeDriver(options);

        // 고장현황 URL 주소
        driver.get("https://www.ictr.or.kr/main/railway/guidance/elevator.jsp");
        driver.manage().timeouts().implicitlyWait(Duration.ofMillis(500));

        // <td> 태그의 값들을 가져옴
        List<WebElement> webData = driver.findElements(By.tagName("td"));
        List<String> line = new ArrayList<>();

        // 가져온 값들을 리스트에 정리하여 추가
        for (WebElement element : webData) {
            line.add(element.getText().trim());
        }

        List<Map<String, String>> webList = new ArrayList<>();
        for (int i=0; i<line.size(); i+=6) {
            Map<String, String> item = new LinkedHashMap<>();
            item.put("역사", line.get(i+1));
            item.put("장비", line.get(i+2));
            item.put("호기", line.get(i+3));
            webList.add(item);
        }

        // 디버깅용 코드 (문학경기장, 엘리베이터, 3호기를 고장현황 리스트에 추가)
        Map<String, String> item = new LinkedHashMap<>();
        item.put("역사", "문학경기장");
        item.put("장비", "엘리베이터");
        item.put("호기", "3");
        webList.add(item);

        // for (Map<String, String> result : webList) {
        //     System.out.println(result);
        // }

        driver.quit();
        return webList;
    }

    // 상태 체크 (운행중, 수리중) 후 최종 데이터 반환
    public List<Map<String, String>> getData() {
        List<Map<String, String>> csvList = getCsvData(); // CSV 파일 리스트
        List<Map<String, String>> webList = getWebData(); // 웹 스크래핑 데이터 리스트 (Selenium)

        for (int i=0; i<csvList.size(); i++) {
            Map<String, String> csv = csvList.get(i);
            String c1 = csv.get("역사");
            String c2 = csv.get("장비");
            String c3 = csv.get("호기");
            for (int j=0; j<webList.size(); j++) {
                Map<String, String> web = webList.get(j);
                String w1 = web.get("역사");
                String w2 = web.get("장비");
                String w3 = web.get("호기");
                // 역사, 장비, 호기를 비교하여 모두 동일할 시 (고장현황 정보와 일치할 시) '수리중'으로 변경
                if (c1.equals(w1) && c2.equals(w2) && c3.equals(w3)) {
                    csv.put("상태", "수리중");
                }
            }
        }
        // 최종 데이터 예시:
        // [{역사=문학경기장, 장비=엘리베이터, 호기=3, 위도=37.4348231, 경도=126.6969204, 상태=수리중},
        // {역사=선학, 장비=엘리베이터, 호기=3, 위도=37.4270381, 경도=126.6986070, 상태=운행중}]
        // System.out.println(csvList);
        return csvList;
    }
}
