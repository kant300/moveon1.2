package web.controller.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import web.model.dto.community.BulkbuygroupDto;
import web.service.community.GroupbulkbuyService;

import java.util.List;

@RestController
@RequestMapping("/groupchat")
@RequiredArgsConstructor
public class GroupbulkbuyController {

    private final GroupbulkbuyService groupbulkbuyService;


//        // 내정보 글 목록 출력
//    @PostMapping("join/write")
//    public ResponseEntity< ? > joinwrite(@RequestParam int mno , int bno){
//        System.out.println("ChatController.joinwrite");
//        List<BulkbuygroupDto> list = groupbulkbuyService.joinwrite(mno , bno);
//        return ResponseEntity.ok(list);
//    }
}
