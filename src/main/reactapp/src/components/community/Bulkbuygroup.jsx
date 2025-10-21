import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "../../assets/css/bulkbuygroup.css";
import { useNavigate } from "react-router-dom";

export default function Bulkbuygroup() {
  const [groups, setGroups] = useState([]);

  // ✅ 글 목록 불러오기
  const fetchGroups = async () => {
    try {
      const response = await axios.get("http://localhost:8080/group/list");
      setGroups(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("❌ 소분모임 목록 조회 실패:", error);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const navigate = useNavigate();

  // ✅ 글쓰기 버튼 클릭
  const handleWriteClick = () => {
    alert("글쓰기 페이지로 이동");
    navigate("/group/create")
  };

  const 입장 = () => {
      alert("방입장");
      navigate("/chatting")
      // 스프링의 @PostMapping("/bcno") 으로 통신하자.성공시 해당 방으로 페이지 전환
        // 만약에 bno가 12 이면 12번방의 인원을 증가하고 12번방으로 페이지 전환
   };

  return (
    <>
      <Header />
      <div id="main" className="bulk-container">
        <div className="bulk-header">
          <h4>소분모임</h4>
          <button onClick={handleWriteClick} className="write-btn">
            + 글쓰기
          </button>
        </div>

        {/* ✅ 소분모임 카드 목록 */}
        <div className="bulk-list">
          {groups.length === 0 ? (
            <p style={{ textAlign: "center", marginTop: "30px" }}>
              등록된 소분모임이 없습니다.
            </p>
          ) : (
            groups.map((item) => (
              <div key={item.bno} className="bulk-card" onClick={ (  )=>{ 입장( item.bno ) } }>
                <h5>{item.btitle}</h5>
                <p className="content">{item.bcontent}</p>
                <div className="info">
                  <span>인원 : {item.bcount}/{item.btotal}</span>
                  <span className="region">인천시 부평구</span>
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
