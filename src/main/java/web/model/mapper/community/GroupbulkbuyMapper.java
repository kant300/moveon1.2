package web.model.mapper.community;

import org.apache.ibatis.annotations.Mapper;
import web.model.dto.community.BulkbuygroupDto;

import java.util.List;
import java.util.Map;


@Mapper
public interface GroupbulkbuyMapper {

    void joinGroup(Map<String,Object> map);

    List<BulkbuygroupDto> myGroups(int mno );

    void leaveGroup(int mno , int bno);
}
