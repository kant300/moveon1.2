package web.model.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Select;
import web.model.dto.MemberDto;

@Mapper     // 빈 등록
public interface MemberMapper {
    // 1. 회원가입
    @Insert("insert into members( mid, mpwd, mname, mphone, memail, maddress1, maddress2, maddress3 ) " +
            "values ( #{mid}, #{mpwd}, #{mname}, #{mphone}, #{memail}, #{maddress1}, #{maddress2}, #{maddress3} )")
    @Options( useGeneratedKeys = true , keyProperty = "mno" )
    public int signup(MemberDto memberDto);

    // 2. 로그인 : 회원아이디로 계정 정보 조회 + 로그인
    @Select("select * from members where mid = #{mid}")
    MemberDto login( String mid );
}
