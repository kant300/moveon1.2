package web.Mapper.Bulkbuygroup;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import web.model.dto.bulkbuygroup.BulkbuygroupDto;

import java.util.List;

@Mapper
public interface BulkbuygroupMapper {

    // 글쓰기
    boolean createGroup(BulkbuygroupDto dto);

    // 글 리스트 출력
    List<BulkbuygroupDto> listGroup();

    // 조회하기
    BulkbuygroupDto listprint(String btitle , String bcontent);

    // (소분모임)글 삭제
    boolean deleteGroup(int mno);

    // (소분모임)글 수정
    boolean updateGroup(BulkbuygroupDto dto);






}
