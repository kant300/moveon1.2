package web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import web.model.dto.PageDto;
import web.model.dto.TrashDto;
import web.service.TrashService;

import java.util.List;

@RestController // 1. HTTP 요청/응답 자료 매핑 기술
@RequestMapping("/living/trash") // 2. HTTP URL 매핑 기술
@RequiredArgsConstructor // 3. final 변수에 대한 자동 생성자 주입
public class TrashController {

    // @RequiredArgsConstructor 사용함으로 @Autowired 생략 한다.
    public final TrashService trashService;

    // [1] 쓰레기 배출정보 등록 // 쓰레기 배출정보를 입력받아 저장한다.
    @PostMapping("")
    public boolean trashAdd(@RequestBody TrashDto trashDto){
        System.out.println("컨트롤러 : trashDto = " + trashDto);
        return trashService.trashAdd( trashDto );
    }

    // [2] 쓰레기 배출정보 전체조회	//	모든 쓰레기 배출정보(dto)를 출력한다.
    @GetMapping("")
    public PageDto trashPrint(@RequestParam( defaultValue = "1" ) int pNo,
                              @RequestParam( defaultValue = "1" ) int page,
                              @RequestParam( defaultValue = "5" ) int count){
        return trashService.trashPrint(pNo,page,count);
    }

    // [3] 쓰레기 배출정보 개별조회 // 특정한 쓰레기 번호로 쓰레기 배출정보 출력한다.
    @GetMapping("/find") // http:localhost:8080/living/trash/find?tCity=?&tGu=?
    public TrashDto trashFind(@RequestParam String tCity, @RequestParam String tGu ){
        return trashService.trashFind( tCity, tGu );
    }

    // [4] 쓰레기 배출정보 삭제	 // 삭제할 쓰레기 번호(tNo)를 입력받아 삭제한다.
    @DeleteMapping("") // http://localhost:8080/living/trash?tNo=1
    public boolean trashDelete(@RequestParam int tNo){ return trashService.trashDelete( tNo ); }

    // [5] 쓰레기 배출정보 수정	// 수정할 쓰레기번호 와 배출지역, 배출정보를 수정한다.
    @PutMapping("") // http:localhost:8080/living/trash
    public boolean trashUpdate(@RequestBody TrashDto trashDto){ return trashService.trashUpdate(trashDto); }
} //class end

















