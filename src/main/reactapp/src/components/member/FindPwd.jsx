import '../../assets/css/member/findPwd.css'
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import arrow_back_ios_new from '../../assets/images/icons/arrow_back_ios_new_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

export default function FindPwd() {
    const navigate = useNavigate();

    return (<>
        <Header />
        <div id="wrap">
            <div id="container">
                <div id="content_gray">
                    <div id="contentTop">
                        <img src={arrow_back_ios_new} onClick={() => navigate(-1)} style={{cursor: "pointer"}} />
                        <div id='title'>아이디/비밀번호 찾기</div>
                        <div>　</div>
                    </div>
                    <div id="linkBtn">
                        <Link to='/findId'><div>아이디 찾기</div></Link>
                        <Link to='/findPwd'><div id="selected">비밀번호 찾기</div></Link>
                    </div>
                    <div id="mainMenu">
                        <div className="inputDiv">아이디 <input type="text" id="idInput" placeholder="ID를 입력해주세요"/></div>
                        <div className="inputDiv">이메일 <input type="text" id="emailInput" placeholder="이메일 주소를 입력해주세요"/></div>
                        <div className='inputDiv buttonDiv'><button type="button" className="button_small">재요청</button></div>
                        <div className="inputDiv">인증번호 <input type="text" id="verifyInput" placeholder="인증 번호를 입력해주세요"/></div>
                        <div className='inputDiv buttonDiv'><button type="button" className="button_small">확인</button></div>
                    </div>
                    <div id='btnDiv'>
                        <button type="button" className="button">확인</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}