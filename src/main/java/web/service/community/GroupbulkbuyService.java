package web.service.community;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import web.model.dto.community.BulkbuygroupDto;
import web.model.mapper.community.GroupbulkbuyMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class GroupbulkbuyService {

    private final GroupbulkbuyMapper groupbulkbuyMapper;

    public void joinGroup(int mno , int bno){
        Map<String , Object> map = new HashMap<>();
        map.put("mno", mno);
        map.put("bno", bno);
        groupbulkbuyMapper.joinGroup(map);
    }

    public List<BulkbuygroupDto> myGroups(int mno ){
        List<BulkbuygroupDto> dto = groupbulkbuyMapper.myGroups(mno );
        return dto;
    }

    public void leaveGroup(int mno , int bno){
        System.out.println("GroupbulkbuyService.leaveGroup");
        groupbulkbuyMapper.leaveGroup(mno , bno);
    }
}
