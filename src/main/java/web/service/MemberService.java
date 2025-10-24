package web.service;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import web.model.mapper.MemberMapper;
import web.model.dto.MemberDto;

@Service
@RequiredArgsConstructor    // final 필드에 대한 자동 생성자 주입
public class MemberService {
    private final MemberMapper memberMapper;
    private final JwtService jwtService;

    // 1-2 : 비크립트 라이브러리 객체 주입
    private final BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

    // 1. 회원가입
    public boolean signup(MemberDto memberDto){
        // 1-3 : 회원가입 하기전에 비크립트 를 이용한 비밀번호 암호화
        memberDto.setMpwd( bcrypt.encode( memberDto.getMpwd() ) );
        System.out.println("[암호화 결과] = " + memberDto.getMpwd() );

        int result = memberMapper.signup(memberDto); // mapper 이용한 SQL 처리
        if( result > 0 && memberDto.getMno() > 0 ){   // 만약에 mno 생성되었다면 회원가입 SQL 처리 성공
            return true;  // 성공
        }else{
             return false; // 실패
        }
    } // m end

    // 2 로그인 : 암호문을 해독하여 평문을 비교하는 방식이 아닌 비교할대상을 암호화해서 암호문 비교
    public MemberDto login( MemberDto memberDto ){
        // 2-1 : 현재 로그인에서 입력받은 아이디의 계정이 있는지 확인
        MemberDto result = memberMapper.myInfo( memberDto.getMid() );
        if( result == null ){ return null; }

        boolean result2 = bcrypt.matches( memberDto.getMpwd() , result.getMpwd() );
        if( result2 == true ){ // 비밀번호가 일치하면 로그인 성공
            result.setMpwd( null ); // 비밀번호 성공시 반환되는 계정에는 비밀번호 제외
            return result;
        }else{ return null; }

    } // m end

    // 3. 내 정보 조회
    public MemberDto myInfo( String mid ){
        MemberDto result = memberMapper.myInfo( mid );
        return result;
    }

    // 4. ** request 를 넣으면 회원정보 반환하는 함수**
    public MemberDto myInfo(HttpServletRequest request ){ // 쿠키 활용한 로그인상태를 확인

        // 3-1 : 현재 클라이언트(브라우저) 저장된 모든 쿠키 가져오기
        Cookie[] cookies = request.getCookies();
        // 3-2 : 반복문 이용한 특정한 쿠키명 찾기
        if( cookies != null ){ // 만약에 쿠키들이 존재하면
            for( Cookie c : cookies ){ // 하나씩 쿠키들을 반복하여
                if( c.getName().equals( "loginUser") ){ // "loginUser" 쿠키명과 같다면
                    // ******* 쿠키의 저장된 토큰 반환 하기 *********
                    String token = c.getValue();// 쿠키의 저장된 토큰 반환
                    boolean checked = jwtService.checkToken( token ); // 토큰 검증
                    if( checked ) {// 만약에 토큰이 유효하면
                        String mid =jwtService.getMid( token ); // 토큰의 저장된 클레임(회원아이디) 추출하기
                        // 3-3 : 서비스를 호출하여 내정보 조회
                        MemberDto result = myInfo( mid );
                        return result;
                    }//
                    // 만약에 토큰이 유효하지 않으면
                    return null;
                }
            }
        }
        return null;
    }

}
