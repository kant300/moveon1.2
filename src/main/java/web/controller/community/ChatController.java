package web.controller.community;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.model.dto.MemberDto;
import web.model.dto.community.BulkbuygroupDto;
import web.model.dto.community.ChattingDto;
import web.service.MemberService;
import web.service.community.ChatService;

import java.util.List;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {
    private final ChatService chatService;
    private final MemberService memberService;

    // 메세지 내용 저장 (DB 저장)
    @PostMapping("/write")
    public ResponseEntity< ? > writeChat(@RequestBody ChattingDto dto , HttpServletRequest request){

        MemberDto memberDto = memberService.myInfo(request);
        
        dto.setMno(memberDto.getMno());
        System.out.println("memberDto = " + memberDto);
        System.out.println("ChatController.saveChat");
        boolean result = chatService.writeChat(dto);
        return ResponseEntity.ok(result);
    }

    // 메세지 내용 출력 어디에? 메세지 입력한 방(cno)에
    @GetMapping("/print")
    public ResponseEntity< ? > printChat(@RequestParam int bno){
        System.out.println("ChatController.printChat");
        List<ChattingDto> list = chatService.printChat(bno);
        return ResponseEntity.ok(list);

    }

    // 인원 조회
    @GetMapping("/cocheck")
    public ResponseEntity< ? > countChat(@RequestParam int bno){
        System.out.println("bno = " + bno);
        BulkbuygroupDto result = chatService.countChat(bno);
        return ResponseEntity.ok(result);
    }
    // 인원 증가
    @PutMapping("/count/pp")
    public ResponseEntity< ? > countpp(int bno){
        System.out.println("ChatService.countChat");
         chatService.countpp(bno);
        return ResponseEntity.ok().build();
    }
    // 인원 감소
    @PutMapping("/count/mm")
    public ResponseEntity< ? > countmm(int bno){
        System.out.println("ChatService.countChat");
          chatService.countmm(bno);
        return ResponseEntity.ok().build();
    }

}
