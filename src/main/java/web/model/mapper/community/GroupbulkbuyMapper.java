package web.model.mapper.community;

import org.apache.ibatis.annotations.Mapper;
import web.model.dto.community.BulkbuygroupDto;

import java.util.List;


@Mapper
public interface GroupbulkbuyMapper {

    List<BulkbuygroupDto> joinwrite(int mno , int bno);
}
