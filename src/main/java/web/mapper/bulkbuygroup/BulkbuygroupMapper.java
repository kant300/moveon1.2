package web.mapper.bulkbuygroup;

import org.apache.ibatis.annotations.Mapper;
import web.model.dto.bulkbuygroup.BulkbuygroupDto;

import java.util.List;
import java.util.Map;

@Mapper
public interface BulkbuygroupMapper {

    // 글쓰기
    boolean createGroup(BulkbuygroupDto dto);

    // 글 리스트 출력
    List<BulkbuygroupDto> listGroup();

    // 소분모임 주소 체크
    List<BulkbuygroupDto> addressGroup(Map<String , Object> maps);

    // 조회하기
    BulkbuygroupDto listprint(Map<String , Object> maps);

    // (소분모임)글 삭제
    boolean deleteGroup(int mno);

    // (소분모임)글 수정
    boolean updateGroup(BulkbuygroupDto dto);

    // 방 입장
    int chattingCount(int bno);






}
