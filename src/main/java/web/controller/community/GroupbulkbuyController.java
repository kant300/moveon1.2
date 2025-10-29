package web.controller.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import web.model.dto.community.GroupbulkbuyDto;
import web.service.community.GroupbulkbuyService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/groupchat")
@RequiredArgsConstructor
public class GroupbulkbuyController {

    private final GroupbulkbuyService groupbulkbuyService;

    // 회원)mno 이 참여중인 bno 방 저장
    @PostMapping("join/Group")
    public ResponseEntity< ? > joinGroup(@RequestParam int mno , @RequestParam int bno){
        System.out.println("GroupbulkbuyController.joinGroup");
        groupbulkbuyService.joinGroup(mno , bno);
        return ResponseEntity.ok("참여 완료");
    }

    // 내정보 글 목록 출력
    @GetMapping("/my/Group")
    public ResponseEntity< ? > myGroups(@RequestParam int mno){
        System.out.println("ChatController.joinwrite");
        List<GroupbulkbuyDto> list = groupbulkbuyService.myGroups(mno);
        return ResponseEntity.ok(list);
    }

    // 방 퇴장시 내역
    @PutMapping("/leave/Group")
    public ResponseEntity< ? > leaveGroup(@RequestParam int mno , @RequestParam int bno ){
        System.out.println("GroupbulkbuyController.인스턴스 이니셜라이저");
        groupbulkbuyService.leaveGroup(mno , bno);
        return ResponseEntity.ok("퇴장");

    }
}
