import "../../assets/css/main/findId.css"
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import arrow_back_ios_new from '../../assets/images/icons/arrow_back_ios_new_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

export default function FindId() {
    return (<>
        <Header />
        <div id="wrap">
            <div id="container">
                <div id="content_gray">
                    <div id="contentTop">
                        <Link to='/menu'><img src={arrow_back_ios_new} /></Link>
                        <div id='title'>아이디/비밀번호 찾기</div>
                        <div>　</div>
                    </div>
                    <div id="linkBtn">
                        <Link to='/findId'><div id="selected">아이디 찾기</div></Link>
                        <Link to='/findPwd'><div>비밀번호 찾기</div></Link>
                    </div>
                    <div id="mainMenu">
                        <div>이메일 <input type="text" id="emailInput" placeholder="이메일 주소를 입력해주세요"/></div>
                        <div>휴대폰 <input type="text" id="phoneInput" placeholder="010-0000-0000 형식으로"/></div>
                    </div>
                    <button type="button" className="button">확인</button>
                    <div style={{marginTop: "50px"}}>고객님의 아이디는<br /><b>test123</b><br />입니다.</div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}