import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../assets/css/community/mypagebulkbuygroup.css";
import { useNavigate } from "react-router-dom";

export default function Bulkbuygroup() {
  const [groups, setGroups] = useState([]);
  const [keyword, setkeyword] = useState("");
  const [auth, setAuth] = useState({ check: null })

  //  글 목록 불러오기
  const fetchGroups = async () => {
    try {
      const response = await axios.get("http://localhost:8080/group/join/list");
      setGroups(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("❌ 소분모임 목록 조회 실패:", error);
    }
  };
  // 검색 키워드
  const keybod = async (e) => {
    const value = e.target.value;
    setkeyword(value);
    try {
      if (value.trim() == "") {
        fetchGroups();
      } else {
        const response = await axios.get("http://localhost:8080/group/listprint", {
          params: { btitle: value, bcontent: value },
        });
        setGroups(response.data);
      }
    } catch (e) { console.log(e) }

  }
  useEffect(() => {
    checkcookie();
  }, [])

  // 최촛 ㅣㄹ행 렌더링1번
  useEffect(() => {
    if(auth.mno){
    fetchGroups(auth?.mno);
    }
  }, [auth]);

  const navigate = useNavigate();
  // 로그인 정보 가져오기
  const checkcookie = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/member/info", {
        params : { mno : auth.mno } , 
         withCredentials: true, 
        }
    );
      setAuth(res.data);
      console.log(res.data)
      if (res.data === null) {
        alert('로그인후 이용해주세요');
        navigate('/login');
      }
    } catch (e) { setAuth({ check: false }) };

  }

  //  글쓰기 버튼 클릭
  const handleWriteClick = () => {
    alert("글쓰기 페이지로 이동");
    navigate("/group/create")
  };


  // 방 입장 시 인원 +1
const 입장 = async (item) => {
  if (item.bcount < item.btotal) { // 인원 제한 조건 수정
    try {
      const response = await axios.put(
        "http://localhost:8080/chat/count/pp",
        null,
        {
          params: { bno: item.bno },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        await fetchGroups();
        alert(`방 입장 성공 (${item.bno})`);
        navigate(`/community/chatting/${item.bno}`, {
          state: { btotal: item.btotal, bcount: item.bcount + 1 },
        });
      } 
    } catch (e) {
      console.error(" 입장 오류:", e);
        alert(" 인원 가득참 또는 실패");
        window.location.reload(); // 화면 자동 새로고침 
      
    }
  } else {
    alert(" 인원 가득참! 더 이상 입장할 수 없습니다.");
  }
};





  return (
    <>
      <Header />
      <div id="main" className="bulk-container">
        <div className="bulk-header">
          <h4>소분모임</h4>
          <div className="search-bar">
            <input type="text" value={keyword} onChange={keybod} placeholder="제목 또는 내용 검색..." className="search-input" />
          </div>
          <button onClick={handleWriteClick} className="write-btn">
            + 글쓰기
          </button>
        </div>

        {/*  소분모임 카드 목록 */}
        <div className="bulk-list">
          {groups.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "30px" }}>
              등록된 소분모임이 없습니다.
            </p>
          ) : (
            groups.map((item) => (
              <div key={item.bno} className="bulk-card" onClick={() => { 입장(item) }}>
                <h5>{item.btitle}</h5>
                <p className="content">{item.bcontent}</p>
                <div className="info">
                  <span>인원 : {item.bcount}/{item.btotal}</span>
                  <span className="region">{item.maddress1} {item.maddress2} {item.maddress3}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
