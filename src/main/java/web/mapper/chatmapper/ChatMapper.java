package web.mapper.chatmapper;

import org.apache.ibatis.annotations.Mapper;
import web.model.dto.chatting.ChattingDto;

import java.util.List;

@Mapper
public interface ChatMapper {

    // 메세지 내용 저장
    boolean writeChat(ChattingDto dto);
    // 메세지 내용 출력
    List<ChattingDto> printChat(int bno);
}
