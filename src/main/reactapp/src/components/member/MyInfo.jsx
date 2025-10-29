import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import arrow_back_ios_new from '../../assets/images/icons/arrow_back_ios_new_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrow_forward_ios from '../../assets/images/icons/arrow_forward_ios_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import home from '../../assets/images/icons/home_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import Header from "../Header";
import Footer from "../Footer";

export default function MyInfo() {
    const [ member, setMember ] = useState(null); // 로그인된  멤버 정보저장
    const navigate = useNavigate();
    {/* 회원정보 불러오기 */}
    useState( ()  => {
        axios
            .get("/api/member/info")
            .then( (res) => setMember(res.data) )
            .catch( (err) => console.error("회원정보 불러오기 실패 : " , err) );
        }, [] );
    {/* 회원데이터가 없으면 로딩 표시 */}
    if(!member) return<div>회원정보를 불러오는 중입니다...</div>;

    return(<>
        {/* 헤더 */ }
        <Header /> 
            <div id="wrap">
                <div id="container">
                    <div id='myinfo'>
                        <Link to='/setting'><img src={arrow_back_ios_new} /></Link>
                    <div id='myinfo_title'>회원정보관리
                        <Link to='/main'><img src={home} /></Link>
                    </div>
                    </div>
                

        {/* 회원 기본 정보 */}
        <div id="myinfo_basic">
            <div id="myinfo_id"> {member.mid} </div>
            <div id="myinfo_date"> 가입일 : {member.mdate}  </div>
            <div id="status"><span id="status-dot">정상</span></div>
        </div>

        {/* 회원 상세 정보 */}
        <div id="myinfo_detail">
            <div className="info_item">
                <span className="info_label">이름</span>
                <span className="info_value">{member.mname}</span>
                <Link className="/modifyName">변경하기<img src={arrow_forward_ios} /></Link>
            </div>
            <div className="info_item">
                <span className="info_label">이메일</span>
                <span className="info_value">{member.memail}</span>
                <Link to="/modifyEmail">변경하기<img src={arrow_forward_ios} /></Link>
            </div>
            <div className="info_item">
                <span className="info_label">휴대폰번호</span>
                <span className="info_value">{member.mphone}</span>
                <Link to="/modifyPhone">변경하기<img src={arrow_forward_ios} /></Link>
            </div>
            <div className="info_item">
                <span className="info_label">주소변경</span>
                <span className="info_value">{member.maddress1}{member.maddress2}{member.maddress3}</span>
                <Link to="/modifyAddress">변경하기<img src={arrow_forward_ios} /></Link>
            </div>
            <div className="info_item">
                <span className="info_pwd">비밀번호</span>
                <Link to="/modifyPwd">변경하기<img src={arrow_forward_ios} /></Link>
            </div>
            <div className="info_item">
                <Link to="/signout"> 회원탈퇴</Link> 
            </div>
            
        </div>
        </div>
            </div>
            <Footer />
        </>)
}