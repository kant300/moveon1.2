package web.service.safety;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.geotools.geometry.jts.JTS;
import org.geotools.referencing.CRS;
import org.locationtech.jts.geom.Coordinate;
import org.opengis.referencing.crs.CoordinateReferenceSystem;
import org.opengis.referencing.operation.MathTransform;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.util.*;

@Service
public class ShelterService {
    public List<Map<String, Object>> getShelterData() {
        List<Map<String, Object>> data = new ArrayList<>();
        try {
            File file = new File("src/main/resources/static/data/오픈데이터_지진대피소_정보.xlsx");
            FileInputStream fis = new FileInputStream(file);
            XSSFWorkbook workbook = new XSSFWorkbook(fis);
            Sheet sheet = workbook.getSheetAt(0);

            for (int i=1; i<=sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                Map<String, Object> item = new LinkedHashMap<>();

                // 좌표계 변환 (EPSG:5186 -> WGS84)
                CoordinateReferenceSystem source = CRS.decode("EPSG:5186", true);
                CoordinateReferenceSystem target = CRS.decode("EPSG:4326", true);
                MathTransform transform = CRS.findMathTransform(source, target, true);

                double x = row.getCell(9).getNumericCellValue();
                double y = row.getCell(10).getNumericCellValue();
                Coordinate sourceCoord = new Coordinate(x, y);
                Coordinate targetCoord = JTS.transform(sourceCoord, null, transform);

                item.put("facilities_nm", row.getCell(3).getStringCellValue());
                item.put("xcoord", targetCoord.x);
                item.put("ycoord", targetCoord.y);
                data.add(item);
            }
            workbook.close();
            fis.close();

            // 최종 데이터 예시:
            // [{facilities_nm=연안부두 해양광장, xcoord=126.60191163614341, ycoord=37.45680729832232}, ...]
             System.out.println(data);
            return data;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
