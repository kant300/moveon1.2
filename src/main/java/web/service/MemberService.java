package web.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import web.model.mapper.MemberMapper;
import web.model.dto.MemberDto;

@Service
@RequiredArgsConstructor    // final 필드에 대한 자동 생성자 주입
public class MemberService {
    private final MemberMapper memberMapper;

    // 1-2 : 비크립트 라이브러리 객체 주입
    private final BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

    // 1. 회원가입
    public int signup(MemberDto memberDto){
        // 1-3 : 회원가입 하기전에 비크립트 를 이용한 비밀번호 암호화
        memberDto.setMpwd( bcrypt.encode( memberDto.getMpwd() ) );
        System.out.println("[암호화 결과] = " + memberDto.getMpwd() );

        memberMapper.signup(memberDto); // mapper 이용한 SQL 처리
        if( memberDto.getMno() > 0 ){   // 만약에 mno 생성되었다면 회원가입 SQL 처리 성공
            return memberDto.getMno();  // 회원번호 반환
        }else{
             return 0; // 회원가입 실패를 0으로 가정한다.
        }
    } // m end

    // 2. 로그인 : 암호문을 해독하여 평문을 비교하는 방식이 아닌 비교할 대상을 암호화해서 암호문 비교
    public MemberDto login( MemberDto memberDto ){
        // 2-1 : 현재 로그인에서 입력받은 아이디의 계정이 있는지 확인
        MemberDto result = memberMapper.login( memberDto.getMid(), memberDto.getMpwd() );
        if( result == null ){ return null; }
        boolean result2 = bcrypt.matches( memberDto.getMpwd(), result.getMpwd() );
        if( result2 == true ){ // 비밀번호 일치하면 로그인 성공
            result.setMpwd( null ); // 비밀번호 성공시 반환되는 계정에는 비밀번호 제외
            return result;
        }else{ return null; }
    }


}
