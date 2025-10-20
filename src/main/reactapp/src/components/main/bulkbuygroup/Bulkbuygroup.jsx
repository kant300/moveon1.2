import axios from "axios";
import Footer from "../../Footer";
import '../../../assets/css/bulkbuygroup.css';
import Header from "../../Header";
import { useEffect, useRef, useState } from "react";

export default function Bulkbuygroup(props){

    const mno = 1; 
    const btitle = '제목';
    const bcontent = '내용';
    const btotal = 10;
    const bcount = 1;

    const [ count , chatting ] = useState( 0 );
    const countRef = useRef( count ); // ( 초기값 )

    const textbtn = async()=> { console.log('Bulkbuy'); 
        try{
            const obj = { 
                mno : mno,
                btitle : btitle,
                bcontent : bcontent,
                btotal : btotal,
                bcount : bcount,
            }
        console.log('일단 테스트');            

        const response = await axios.post("http://localhost:8080/group/create" , obj )
        const data = response.data
        console.log(data);
        console.log('일단 테스트2');
        }catch(e) { console.log(e)} ;
    }

    console.log('Bulkbuy');

    useEffect( () => {
        countRef.current = count;
    },  [count] );


    
    return(<>

        <Header/>
        <div id="main">
            <a href="#" style={{ color: "black", textDecoration: "none" }}><h4> 소분모임 </h4></a>
            <br/>
        <button onClick={textbtn} id="txbtn" type="button"> + 글쓰기 </button> <br/>
        <button onClick={ (e) =>{chatting(count +1 ); }} id="cathbtn" type="button"> 참치캔 구매 <br/>같이가실분 구해요<br/> 인원 : {count}/{count} 지역 </button>

        {/* <p> 인원 : {count}/{count} </p> */}
        {/* <p> 위치 : {maddress2} {maddress3} </p> */}
        </div>
        <Footer />
    
    </>)

}

