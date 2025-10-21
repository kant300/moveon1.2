package web.service.bulkbuygroupservice;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import web.mapper.bulkbuygroup.BulkbuygroupMapper;
import web.model.dto.bulkbuygroup.BulkbuygroupDto;

import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class BulkbuygroupService {
    private final BulkbuygroupMapper bulkbuygroupMapper;

    // 글쓰기
    public boolean createGroup(BulkbuygroupDto dto){
        System.out.println("BulkbuygroupService.createGroup");
        boolean result = bulkbuygroupMapper.createGroup(dto);
        return result;
    }

    // 글 리스트 출력
    public List<BulkbuygroupDto> listGroup(){
        List<BulkbuygroupDto> dto = bulkbuygroupMapper.listGroup();
        return dto;
    }

    // 소분모임 주소 체크
    public List<BulkbuygroupDto> addressGroup(Map<String , Object> maps){
        return bulkbuygroupMapper.addressGroup(maps);

    }

    // 제목/내용 검색하기
    public BulkbuygroupDto listprint(Map<String , Object> maps){
        BulkbuygroupDto dto = bulkbuygroupMapper.listprint(maps);
        return dto;
    }

    // 글삭제
    public boolean deleteGroup(int bno){
        boolean result = bulkbuygroupMapper.deleteGroup(bno);
        return result;
    }

    // 글 수정
    public boolean updateGroup(BulkbuygroupDto dto){
        boolean result = bulkbuygroupMapper.updateGroup(dto);
        return result;
    }

    // 방입장시 인원+1
    public String countCheck(int bno){
        int result = bulkbuygroupMapper.countCheck(bno);
        if (result==1) return "입장하셨습니다.";
        return "입장실패";
    }
}
