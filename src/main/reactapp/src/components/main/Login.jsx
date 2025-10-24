import '../../assets/css/main/login.css'
import Footer from "../Footer";
import Header from "../Header";
import arrow_back_ios_new from '../../assets/images/icons/arrow_back_ios_new_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

// 로그인 페이지
export default function Login() {

    const navigate = useNavigate();

    const login = async() => {
        const mid = document.querySelector("#idInput").value;
        const mpwd = document.querySelector("#pwdInput").value;
        const obj = { mid  , mpwd }
        
        const response = await axios.post("http://localhost:8080/api/member/login", obj , { withCredentials : true } );
        const data = await response.data;
        if( data != ""){
            alert('로그인 성공')
            navigate( "/" );
        }else{
            alert('로그인 실패')
        }
    }

    return (<>
        <Header />
        <div id="wrap">
            <div id="container">
                <div id='login'>
                    <div id="contentTop">
                        <Link to='/menu'><img src={arrow_back_ios_new} /></Link>
                        <div id='title'>로그인</div>
                        <div>　</div>
                    </div>
                    <h2>mOveOn</h2>
                    <div>
                        <div><input type="text" id="idInput" className='input' placeholder="ID를 입력해주세요."/></div>
                        <div><input type="text" id="pwdInput" className='input' placeholder="비밀번호를 입력해주세요." /></div>
                        <div id='linkMenu'>
                            <div><input type='checkbox' id='autoLoginInput' /> 자동 로그인</div>
                            <Link to='/findId'><div>아이디 / 비밀번호 찾기</div></Link>
                        </div>
                        <div> 
                            <button type="button" className='button' onClick={() => {login()}}>로그인</button> <br />
                            <Link to='/signup'><button type="button" className='button'>회원가입</button></Link>
                        </div>
                    </div>
                    <div id='ask'>제휴문의</div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}