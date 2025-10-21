package web.controller.bulkbuygroupcontroller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.mapper.bulkbuygroup.BulkbuygroupMapper;
import web.model.dto.bulkbuygroup.BulkbuygroupDto;
import web.service.bulkbuygroupservice.BulkbuygroupService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("group")
@RequiredArgsConstructor
public class BulkbuygroupController {
    private final BulkbuygroupService bulkbuygroupService;

    // 글쓰기
    @PostMapping("/create")
    public ResponseEntity< ? > createGroup(@RequestBody BulkbuygroupDto dto){
        System.out.println("BulkbuygroupController.createGroup");
        boolean result = bulkbuygroupService.createGroup(dto);
        return ResponseEntity.ok(result);
    }

    // 글 리스트 출력
    @GetMapping("/list")
    public ResponseEntity< ? > listGroup(){
        List<BulkbuygroupDto> dto = bulkbuygroupService.listGroup();
        return ResponseEntity.ok(dto);
    }

    // 소분모임 주소 체크
    @GetMapping("/address")
    public ResponseEntity< ? > addressGroup(@RequestParam Map<String , Object> maps){
        List<BulkbuygroupDto> dto = bulkbuygroupService.addressGroup(maps);
        return ResponseEntity.ok(dto);
    }

    // 조회하기 ( 제목/내용 검색)
    @GetMapping("/listprint")
    public ResponseEntity< ? > listprint(@RequestParam Map<String , Object> maps){
        System.out.println("BulkbuygroupController.listprint");
        BulkbuygroupDto dto = bulkbuygroupService.listprint(maps);
        return ResponseEntity.ok(dto);

    }

    // 글 삭제
    @DeleteMapping("/delete")
    public ResponseEntity< ? > deleteGroup(@RequestParam int bno){
        boolean result = bulkbuygroupService.deleteGroup(bno);
        return ResponseEntity.ok(result);
    }

    // 글 수정
    @PutMapping("/update")
    public ResponseEntity< ? > updateGroup(@RequestBody BulkbuygroupDto dto){
        boolean result = bulkbuygroupService.updateGroup(dto);
        return ResponseEntity.ok(result);
    }

    // 방 입장 인원
    @PostMapping("/bcno")
    public ResponseEntity< ? > countCheck(@RequestBody int bno){
        String result = bulkbuygroupService.countCheck(bno);
        return ResponseEntity.ok(result);
    }
}
