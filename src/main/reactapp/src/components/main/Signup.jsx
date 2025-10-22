import '../../assets/css/main/signup.css'
import Footer from "../Footer";
import Header from "../Header";
import arrow_back_ios_new from '../../assets/images/icons/arrow_back_ios_new_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { Link } from "react-router-dom";
import axios from 'axios';

// 회원가입 페이지
export default function Signup() {

    const signup = async() => {
        const id = document.querySelector("#idInput").value;
        const pwd = document.querySelector("#pwdInput").value;
        const pwdCheck = document.querySelector("#pwdCheckInput").value;
        const name = document.querySelector("#nameInput").value;
        const email = document.querySelector("#emailInput").value;
        const phone = document.querySelector("#phoneInput").value;

        if (pwd != pwdCheck) {
            alert("비밀번호를 정확히 입력해주세요.");
            return;
        }

        const obj = [id, pwd, name, email, phone];
        const response = await axios.post("http://localhost:8080/api/member/signup", obj);
        const data = await response.data;
        console.log(data);
    }

    return (<>
        <Header />
        <div id="wrap">
            <div id="container">
                <div id="content_gray">
                    <div id="contentTop">
                        <Link to='/menu'><img src={arrow_back_ios_new} /></Link>
                        <div id='title'>회원가입</div>
                        <div>　</div>
                    </div>
                    <div>
                        <div>아이디 <input type="text" id="idInput" className="input" placeholder="아이디를 입력해주세요" /></div>
                        <div>비밀번호<input type="text" id="pwdInput" className="input" placeholder="비밀번호를 입력해주세요" /></div>
                        <div>비밀번호 확인<input type="text" id="pwdCheckInput" className="input" placeholder="비밀번호를 다시 입력해주세요" /></div>
                        <div>닉네임<input type="text" id="nameInput" className="input" placeholder="닉네임을 입력해주세요" /></div>
                        <div>이메일<input type="text" id="emailInput" className="input" placeholder="이메일 주소를 입력해주세요" /></div>
                        <div>전화번호<input type="text" id="phoneInput" className="input" placeholder="전화번호를 입력해주세요" /></div>
                        <div id='address'>주소
                            <select id='addr1Input'>
                                <option>시/도</option>
                            </select>
                            <select id='addr2Input'>
                                <option>구</option>
                            </select>
                            <select id='addr3Input'>
                                <option>동</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button type='button' className='button' onClick={() => {signup()}}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>)
}