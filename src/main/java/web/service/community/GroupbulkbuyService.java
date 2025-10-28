package web.service.community;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import web.model.dto.community.BulkbuygroupDto;
import web.model.mapper.community.GroupbulkbuyMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GroupbulkbuyService {
    private final GroupbulkbuyMapper groupbulkbuyMapper;


    public List<BulkbuygroupDto> joinwrite(int mno , int bno){
        List<BulkbuygroupDto> dto = groupbulkbuyMapper.joinwrite(mno , bno);
        return dto;
    }
}
