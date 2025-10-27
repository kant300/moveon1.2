import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import "../../assets/css/chatting.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Chatting() {
  const { bno } = useParams();
  const num = parseInt(bno);
  const nav = useNavigate();
  const [mmessage, setmmessage] = useState("");
  const [chatprint, setchatprint] = useState([]);
  const [auth, setAuth] = useState({ check: null });
  const [socket, setwebsocket] = useState(null);
  const [count, setcount] = useState({ btotal: 0, bcount: 0 });

  // ✅ 로그인 정보 가져오기
  const checkcookie = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/member/info", {
        withCredentials: true,
      });
      setAuth(res.data);
      if (res.data === null) {
        alert("로그인후 이용해주세요");
        nav("/login");
      }
    } catch (e) {
      setAuth({ check: false });
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
    const response2 = await axios.get("http://localhost:8080/chat/print", {
      withCredentials: true,
      params: { bno: num },
    });

    setchatprint((arlam) => {
      const list = response2.data.filter(
        (msg) => !arlam.some((p) => p.cno == msg.cno)
      );
      return [...arlam, ...list];
    });
  };

  useEffect(() => {
    checkcookie();
  }, []);

  // ✅ WebSocket 연결
  useEffect(() => {
    if (!auth.mno) return;

    const connet = async () => {
      const sc = new WebSocket("ws://localhost:8080/chatting");
      setwebsocket(sc);

      sc.onopen = () => {
        console.log("알림 등록 성공");
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
        console.log("📩 메세지 확인:", smg);

        if (smg.type === "alarm") {
          setchatprint((alarm) => [
            ...alarm,
            { mname: "alarm", mmessage: smg.message },
          ]);
        }
      };

      sc.onclose = () => console.log("❌ WebSocket 연결 종료");
    };

    connet();
    chattingprint();
    playcount();
  }, [num, auth.mname, auth.mno]);

  // ✅ 스크롤 자동 이동
  useEffect(() => {
    const chattingtop = document.querySelector(".chat-messages");
    if (chattingtop) chattingtop.scrollTop = chattingtop.scrollHeight;
  });

  // ✅ 메시지 전송
  const textbtn = async () => {
    if (!mmessage.trim()) {
      alert("메시지를 입력하세요");
      return;
    }
    const obj = { bno: num, mmessage };
    const response = await axios.post("http://localhost:8080/chat/write", obj, {
      withCredentials: true,
    });
    if (response.data === true) {
      setmmessage("");
      await chattingprint();
    } else {
      alert("전송 실패");
    }
  };

  return (
    <>
      <Header />
      <div className="chat-header">
        <span className="chat-title">같이 구매할 분 구해요</span>
        <span className="countcheck">
          {count.bcount} / {count.btotal}
        </span>
      </div>

      <div className="chat-messages">
        {chatprint.map((c, index) => (
          <div
            key={index}
            className={`chat-item ${
              c.mname === auth.mname ? "chat-my" : ""
            } ${c.mname === "alarm" ? "chat-system" : ""}`}
          >
            {c.mname === "alarm" ? (
              <div className="chat-system-message">{c.mmessage}</div>
            ) : (
              <>
                <div className="chat-name">{c.mname}</div>
                <div className="chat-bubble">{c.mmessage}</div>
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
