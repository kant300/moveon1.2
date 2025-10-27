package web.service.community;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import web.model.dto.community.BulkbuygroupDto;
import web.model.mapper.community.ChatMapper;
import web.model.dto.community.ChattingDto;

import java.util.List;


@Service
@AllArgsConstructor
public class ChatService {
    private final ChatMapper chatMapper;

    // 메세지 내용 저장
    public boolean writeChat(ChattingDto dto){
        System.out.println("ChatController.writeChat");
        boolean result = chatMapper.writeChat(dto);
        return result;
    }

    // 메세지 내용 출력
    public List<ChattingDto> printChat(int bno){
        System.out.println("ChatService.printChat");
        List<ChattingDto> dtos = chatMapper.printChat(bno);
        return dtos;
    }
    public BulkbuygroupDto countChat(int bno){
        System.out.println("ChatService.countChat");
        BulkbuygroupDto result = chatMapper.countChat(bno);
        return result;
    }
        }