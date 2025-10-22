package web.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;
import web.model.dto.MemberDto;

@Mapper     // 빈 등록
@Repository
public interface MemberMapper {
    // 1. 회원가입
    @Insert("insert into members( mid, mpwd, mname, mphone, memail, maddress1, maddress2, maddress3 ) " +
            "values ( #{mid}, #{mpwd}, #{mname}, #{mphone}, #{memail}, #{maddress1}, #{maddress2}, #{maddress3} )")
    @Options( useGeneratedKeys = true , keyProperty = "mno" )
    public int signup(MemberDto memberDto);

    // 2. 아이디 중복확인 및 로그인 시 회원정보 조회
    // 아이디(mid)를 기준으로 회원정보 1건조회
    @Select("select * from members where mid = #{mid}")
    MemberDto findMemberById( String mid );

    // 3. 로그인
    // 아이디(mid)와 비밀번호(mpwd)를 기준으로 회원정보 1건 조회
    @Select("select * from members where mid = #{mid} and mpwd = #{mpwd}")
    MemberDto login(@RequestParam String mid, String mpwd);


}
