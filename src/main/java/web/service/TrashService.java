package web.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import web.model.dao.TrashDao;
import web.model.dto.PageDto;
import web.model.dto.TrashDto;

import java.util.List;

@Service
@RequiredArgsConstructor // 롬복제공 : final 변수에 대한 생성자 자동 제공
public class TrashService {
    // (*)RequiredArgsConstructor 사용시 ( @Autowired 생략해도 자동으로 의존성이 처리된다. )
    private final TrashDao trashDao;

    // [1] 쓰레기 배출정보 등록 // 쓰레기 배출정보를 입력받아 저장한다.
    public boolean trashAdd(TrashDto trashDto){
        System.out.println("서비스 : trashDto = " + trashDto);
        return trashDao.trashAdd( trashDto );
    }
    // [2] 게시물 전체조회 *페이지네이션*
    public PageDto trashPrint(int pNo , int page , int count ){

        // 1. 페이지별 조회할 시작 인덱스 번호 계산
        int startRow = (page-1)* count ; // 현재페이지 -1 하고 페이지당 게시물 수 곱한다.
        // 2. 자료의 개수 구하기
        int totalCount;
        // 3. 자료 구하기
        List<TrashDto> trashList;
        totalCount = trashDao.getTotalCount(pNo);
        trashList = trashDao.trashPrint(pNo,startRow,count);
        // 4. 전체 페이지수 구하기
        int totalPage = totalCount % count == 0 ? totalCount/count : totalCount/count + 1; // 나머지가 존재하면 +1

        int btnCount = 5; // 한 화면에 보여지는 최대 버튼수 5
        // 5. 시작버튼 구하기
        int startBtn = ( (page-1) / btnCount ) * btnCount +1 ;
        // 6. 끝버튼 구하기
        int endBtn = startBtn + btnCount -1;
        // 만약에 끝버튼수가 총페이지수 보다 커지면 총페이지수로 끝버튼번호 사용
        if( endBtn > totalPage ) endBtn = totalPage;

        // pageDto 구성
        PageDto pageDto = new PageDto();
        pageDto.setCurrentPage( page ); // 현재페이지 번호
        pageDto.setTotalPage( totalPage ); // 전체 페이지수
        pageDto.setPerCount( count ); // 한페이지당 게시물 수
        pageDto.setTotalCount( totalCount ); // 모든 게시물 수
        pageDto.setStartBtn( startBtn ); // 시작 페이징 버튼번호
        pageDto.setEndBtn( endBtn ); // 끝 페이징 버튼번호
        pageDto.setData( trashList ); // 페이징한 게시물 리스트

        return pageDto;
    }

//    // [2] 쓰레기 배출정보 전체조회	//	모든 쓰레기 배출정보(dto)를  출력한다.
//    public List<TrashDto> trashPrint(){return trashDao.trashPrint();
//    }

    // [3] 쓰레기 배출정보 개별조회 // 특정한 쓰레기 번호로 쓰레기 배출정보 출력한다.
    public TrashDto trashFind( String tCity, String tGu ){ return trashDao.trashFind( tCity,tGu );
    }

    // [4] 쓰레기 배출정보 삭제	 // 삭제할 쓰레기 번호(tNo)를 입력받아 삭제한다.
    public boolean trashDelete(int tNo){ return trashDao.trashDelete(tNo);}

    // [5] 쓰레기 배출정보 수정	// 수정할 쓰레기번호 와 배출지역, 배출정보를 수정한다.
    public boolean trashUpdate(TrashDto trashDto){ return trashDao.trashUpdate(trashDto); }
}






















