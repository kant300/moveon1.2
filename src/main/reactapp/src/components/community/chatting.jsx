import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import "../../assets/css/community/chatting.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Chatting() {
  const { bno } = useParams();
  const num = bno;
  const nav = useNavigate();
  const [mmessage, setmmessage] = useState("");
  const [chatprint, setchatprint] = useState([]);
  const [auth, setAuth] = useState(null);
  const [socket, setwebsocket] = useState(null);
  const [count, setcount] = useState({ btotal: 0, bcount: 0 });
  const [run, setrun] = useState({});

  // ✅ 로그인 정보 가져오기
  const checkcookie = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/member/info", {
        withCredentials: true,
      });
      setAuth(res.data);
      if (!res.data) {
        alert("로그인후 이용해주세요");
        nav("/login");
      }
    } catch (e) {
      console.error(e);
      setAuth(null);
    }
  };

  // ✅ 인원수 체크
  const playcount = async () => {
    const res = await axios.get("http://localhost:8080/chat/cocheck", {
      withCredentials: true,
      params: { bno: num },
    });
    setcount(res.data);
  };

  // ✅ 채팅 출력
  const chattingprint = async () => {
    const res = await axios.get("http://localhost:8080/chat/print", {
      withCredentials: true,
      params: { bno: num },
    });
    setchatprint(res.data);
  };

  // ✅ 최초 로그인 검사
  useEffect(() => {
    checkcookie();
  }, []);

  // ✅ WebSocket 연결 및 데이터 출력 (auth 준비 후 실행)
  useEffect(() => {
    if (!auth || !auth.mno) return;

    const sc = new WebSocket("ws://localhost:8080/chatting");
    setwebsocket(sc);

    sc.onopen = () => {
      console.log("✅ WebSocket 연결됨");
      sc.send(
        JSON.stringify({
          type: "join",
          bno: num,
          mname: auth.mname,
          mno: auth.mno,
        })
      );
    };

    sc.onmessage = (event) => {
      const smg = JSON.parse(event.data);
      console.log("📩 메세지 수신:", smg);

      if (smg.type === "alarm") {
        setchatprint((prev) => [
          ...prev,
          { mname: "alarm", mmessage: smg.message },
        ]);
      } else if (smg.type === "msg") {
        setchatprint((prev) => [
          ...prev,
          {
            mname: smg.mname,
            mmessage: smg.mmessage,
            cdate: new Date().toISOString(), // ✅ 메시지 전송 시 현재시간 임시 추가
          },
        ]);
      } else if (smg.type === "count") {
        setcount({ bcount: smg.bcount, btotal: smg.btotal });
      }
    };

    sc.onclose = () => console.log("❌ WebSocket 연결 종료");

    chattingprint();
    playcount();

    return () => sc.close();
  }, [auth, num]);

  // ✅ 스크롤 자동 이동
  useEffect(() => {
    const chattingtop = document.querySelector(".chat-messages");
    if (chattingtop) chattingtop.scrollTop = chattingtop.scrollHeight;
  }, [chatprint]);

  // ✅ 메시지 전송
  const textbtn = async () => {
    if (!mmessage.trim()) return;

    const obj = { bno: num, mmessage };
    const response = await axios.post("http://localhost:8080/chat/write", obj, {
      withCredentials: true,
    });

    if (response.data === true) {
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            type: "msg",
            num: num,
            mno: auth.mno,
            mname: auth.mname,
            mmessage: mmessage,
          })
        );
      }
      setmmessage("");
    } else {
      alert("전송 실패");
    }
  };

 //  퇴장
const 퇴장 = async () => {
  try {
    // 1️ group_member 테이블에서 active=0 처리
    await axios.put("http://localhost:8080/groupchat/leave/Group", null, {
      params: { mno: auth.mno, bno: num },
      withCredentials: true,
    });

    // 2️ bulkbuygroup 테이블의 bcount -1
    const response = await axios.put(
      "http://localhost:8080/chat/count/mm",
      null,
      {
        params: { bno: num },
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      alert(`방 퇴장 성공 (${num})`);
      nav(`/community/bulkBuy`);
    }
  } catch (e) {
    console.error("퇴장 실패:", e);
  }
};


  return (
    <>
      <Header />
      <div className="chat-header">
        <button type="button" onClick={퇴장}>
          나가기
        </button>
        <span className="chat-title">같이 구매할 분 구해요</span>
        <span className="countcheck">
          {count.bcount} / {count.btotal}
        </span>
      </div>

      <div className="chat-messages">
        {chatprint.map((c, index) => (
          <div
            key={index}
            className={`chat-item ${c.mname === auth?.mname ? "chat-my" : ""
              } ${c.mname === "alarm" ? "chat-system" : ""}`}
          >
            {c.mname === "alarm" ? (
              <div className="chat-system-message">{c.mmessage}</div>
            ) : (
              <>
                <div className="chat-name">{c.mname}</div>

                {/* ✅ 말풍선 + 시간 같이 묶기 */}
                <div className="chat-bubble-wrapper">
                  <div className="chat-bubble">{c.mmessage}</div>
                  {c.cdate && (
                    <div className="chat-time">
                      {new Date(c.cdate).toLocaleTimeString("ko-KR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>


      <div className="chat-input-area">
        <input
          className="chat-input"
          value={mmessage}
          onChange={(e) => setmmessage(e.target.value)}
          placeholder="메시지를 입력하세요"
          onKeyDown={(e) => e.key === "Enter" && textbtn()}
        />
        <button className="chat-btn" onClick={textbtn}>
          ▶
        </button>
      </div>
      <Footer />
    </>
  );
}
