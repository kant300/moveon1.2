import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import "../../assets/css/chatting.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Chatting() {
  const { bno } = useParams();
  const num = parseInt(bno);

  const [mmessage, setmmessage] = useState("");
  const [chatprint, setchatprint] = useState([]);
  const mname = mname;
  const mno = mno;

  const chattingprint = async () => {
    const response2 = await axios.get("http://localhost:8080/chat/print", {
      params: { bno: num },
    });
    console.log(response2);
    setchatprint(response2.data);
  };

  useEffect(() => {
    chattingprint();
  }, [num]);

  useEffect(() => {
    const chattingtop = document.querySelector('.chat-messages');
    if(chattingtop){
        chattingtop.scrollTop = chattingtop.scrollHeight; // 스크롤 자동 
    }
  })

  const textbtn = async () => {
    if (!mmessage.trim()) {
      alert("메시지를 입력하세요");
      return;
    }
    const obj = { bno: num, mno, mmessage };
    const response = await axios.post("http://localhost:8080/chat/write", obj);
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
      <div className="chat-container">
        <div className="chat-header">같이 구매할 분 구해요</div>
        

        <div className="chat-messages">
          {chatprint.map((c) => (
            <div
              key={c.cno}
              className={`chat-item ${c.mname === mname ? "chat-my" : ""}`}
            >
              <div className="chat-name">{c.mname}</div>
              <div className="chat-bubble">{c.mmessage}</div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            className="chat-input"
            value={mmessage}
            onChange={(e) => setmmessage(e.target.value)}
            placeholder="메시지를 입력하세요" onKeyDown={ (e)=> {if(e.key === "Enter"){textbtn(); }} }
          />
          <button className="chat-btn" onClick={textbtn}>
            ▶
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
