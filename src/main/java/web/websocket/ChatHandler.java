package web.websocket;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class ChatHandler extends TextWebSocketHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();

    // private final MemberService memberservice;  멤버 서비스 만들편 // 풀기
    // 리스트 player 명단목록 // ConcurrentHashMap  Hashtable 차이  Hashtable 구식 , 안전하게 사용하려면 ConcurrentHashMap 권장
    private static final Map<String, List<WebSocketSession>> player = new ConcurrentHashMap<>();

    // 채팅방 @after 치면나옴 클라이언트 실행시 시작되는 메소드
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("Client Start");
    } // afterEstablished end

    // 채팅방 @close 치면 나옴 , 클라이언트 종료시 실행되는 메소드
    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("Client stop");
        // 클아이언트 정보
        String cno = (String) session.getAttributes().get("cno"); // 접속 채팅방 번호
        String mno = (String) session.getAttributes().get("mno"); // 접속 회원 번호
        String mname = (String) session.getAttributes().get("mname"); // 회원 이름

        if (cno != null || mno != null) {
            // 방 접속 목록 가져와
            List<WebSocketSession> list = player.get(cno);
            // 세션 없애기
            list.remove(session);
            // 방 나기기 알림
            alarmMessage(cno, mname + "님이 방을 나가셨습니다. ");
        }

    } // afterClosed end

    // @handle 치면 뜸  클라이언트 실행 후 메세지 보내기
    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        System.out.println("Message");
        System.out.println("session = " + session + ", message = " + message);
        Map<String, String> msg = objectMapper.readValue(message.getPayload(), Map.class); // type 별로 분리 시켜줘  ex) 챗 1 , 내용 : 안녕 , 이름 : 길동
        if (msg.get("type").equals("join")) { // msg 정보를 type 별로 받아 합체(join) 해서 보내기/받기
            String mmessage = msg.get("mmessage"); // 메세지 내역
            String mno = msg.get("mno"); // 회원번호
            String mname = msg.get("mname"); // 회원 이름

            String cno = msg.get("cno"); // 채팅방 정보 호출(꺼내기)
            session.getAttributes().put("cno", cno);
            session.getAttributes().put("mno", mno);
            session.getAttributes().put("mname", mname);
            // 세션 저장 채팅방 인원들 저장하기위해 사용 put ,덮어쓰기 ,추가수정
            if (player.containsKey(cno)) { // 만약에 방번호가 존재하면
                player.get(cno).add(session); // 방번호 세션 추가
            } else { // 존재하지 않을 시
                List<WebSocketSession> list = new Vector<>();
                list.add(session); // 새로운 세션 추가
                player.put(cno, list); // 새로운 리스트 방 생성후  세션 목록에 추가
            }
            alarmMessage(cno, mname + "님이 방을 입장하셨습니다. ");
        } else if (msg.get("type").equals("msg")) {
            // 채팅방에게 받은 모든 세션들에게 받은 메세지(내역) 보내기
            String cno = (String) session.getAttributes().get("cno");
            // 반복 돌려서 client 에 방번호 목록 가져와
            for (WebSocketSession client : player.get(cno)) {
                client.sendMessage(message); // 메세지 내보내기
            }
            System.out.println("ChatHandler.handleTextMessage");
            System.out.println(player); // 확인용
        }
    } // TextMessage end

    public void alarmMessage(String cno, String mmessage) throws Exception {
        // String cno  몇번방 // String mmessage 무슨 메세지를?
        // 예외 던지기
        // map 보내고자 하는 정보 작성
        Map<String, String> msg = new HashMap<>();
        msg.put("type", "alarm");
        msg.put("message", mmessage);
        // map 타입 json 으로 변환
        String jmsg = objectMapper.writeValueAsString(msg);
        // 같은방 모든 메세지 내용 알림 보내기
        for (WebSocketSession session : player.get(cno)) {
            session.sendMessage(new TextMessage(jmsg));
        }
    } // alarmMessage end

} // class end
