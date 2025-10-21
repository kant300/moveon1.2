package web.controller.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.model.dto.community.ChattingDto;
import web.service.community.ChatService;

import java.util.List;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;

    // 메세지 내용 저장 (DB 저장)
    @PostMapping("")
    public ResponseEntity< ? > writeChat(@RequestBody ChattingDto dto){
        System.out.println("ChatController.saveChat");
        boolean result = chatService.writeChat(dto);
        return ResponseEntity.ok(result);
    }

    // 메세지 내용 출력 어디에? 메세지 입력한 방(cno)에
    @GetMapping("")
    public ResponseEntity< ? > printChat(@RequestParam int bno){
        System.out.println("ChatController.printChat");
        List<ChattingDto> list = chatService.printChat(bno);
        return ResponseEntity.ok(list);

    }

}
