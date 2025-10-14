package web.model.dto.chatting;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter@Setter@ToString
public class ChattingDto {
    private int cno; // 채팅번호
    private int mno; // 회원번호
    private int bno; // 글번호
    private String mmessage; // 메세지(내용)
    private String cdate; // 채팅방 기록(날짜)
}
