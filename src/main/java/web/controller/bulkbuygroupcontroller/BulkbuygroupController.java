package web.controller.bulkbuygroupcontroller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.Mapper.Bulkbuygroup.BulkbuygroupMapper;
import web.model.dto.bulkbuygroup.BulkbuygroupDto;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("group")
@RequiredArgsConstructor
public class BulkbuygroupController {
    private final BulkbuygroupMapper bulkbuygroupMapper;

    // 글쓰기
    @PostMapping("/create")
    public ResponseEntity< ? > createGroup(@RequestBody BulkbuygroupDto dto){
        System.out.println("BulkbuygroupController.createGroup");
        boolean result = bulkbuygroupMapper.createGroup(dto);
        return ResponseEntity.ok(result);
    }

    // 글 리스트 출력
    @GetMapping("list")
    public ResponseEntity< ? > listGroup(){
        List<BulkbuygroupDto> dto = bulkbuygroupMapper.listGroup();
        return ResponseEntity.ok(dto);
    }

    // 소분모임 주소 체크
    @GetMapping("address")
    public ResponseEntity< ? > addressGroup(@RequestParam Map<String , Object> maps){
        List<BulkbuygroupDto> dto = bulkbuygroupMapper.addressGroup(maps);
        return ResponseEntity.ok(dto);
    }

    // 조회하기 ( 제목/내용 검색)
    @GetMapping("listprint")
    public ResponseEntity< ? > listprint(@RequestParam Map<String , Object> maps){
        System.out.println("BulkbuygroupController.listprint");
        BulkbuygroupDto dto = bulkbuygroupMapper.listprint(maps);
        return ResponseEntity.ok(dto);

    }

    // 글 삭제
    @DeleteMapping("delete")
    public ResponseEntity< ? > deleteGroup(@RequestParam int mno){
        boolean result = bulkbuygroupMapper.deleteGroup(mno);
        return ResponseEntity.ok(result);
    }

    // 글 수정
    @PutMapping("update")
    public ResponseEntity< ? > updateGroup(@RequestBody BulkbuygroupDto dto){
        boolean result = bulkbuygroupMapper.updateGroup(dto);
        return ResponseEntity.ok(result);
    }

    // 방 입장 인원
    public String countCheck(int bno){
        int result = bulkbuygroupMapper.chattingCount(bno);
        if (result==1) return "입장하셨습니다.";
        return "입장실패";
    }
}
