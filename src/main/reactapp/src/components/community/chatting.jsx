import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { useState } from "react";


export default function chatting(props){
    console.log('chatting');

    const bno = useParams("")

    const [ mmessage , setmmessage ] =  useState("");
    const [ chatprint , setchatprint ] = useState("");
    const mname = mname;
    const mno = 1;

    const textbtn = async() => {
        console.log('textbtn');
        const obj = { bno , mno , mmessage }
        
        try{
            const response = await axios.post("http://localhost:8080/group/write" , obj)
            const data = response.data;
            if(data ==true){
                alert("전송성공");
                setmmessage("");
            

            const response2 = await axios.get("http://localhost:8080/group/print" , {
                params : { bno : bno },
            });
            setchatprint(response2.data);
        }else{
            alert('메세지 전송 실패 ');
        }
        }catch(e) {console.log(e) };
    }

    return(<>
        <Header/>
            <h5> 같이 참치캔 사실분 구해요 </h5> <h3>인원</h3>
            <div>대화 내용 만들기 </div>

            <input value={mmessage} id="texxt" /><button onClick={textbtn}
            onChange={ (e) => setmmessage(e.target.value) }>▶</button>
        <Footer/>
        </>)

}