package web.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web.model.dto.MemberDto;
import web.service.MemberService;

@RestController
@RequestMapping("/api/member")  // 공통URL 정의
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    // 1. 회원가입
    @PostMapping("/signup")
    public ResponseEntity< ? > signup( @RequestBody MemberDto memberDto ){
        int result = memberService.signup( memberDto );
        return ResponseEntity.ok( result );
    }

    // 2. 로그인(+쿠키 : 클라이언트 브라우저의 임시 저장소)


}
