import { Link } from 'react-router-dom';
import '../assets/css/setting.css'
import arrow_back_ios_new from '../assets/images/icons/arrow_back_ios_new_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import arrow_forward_ios from '../assets/images/icons/arrow_forward_ios_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import toggle_on from '../assets/images/icons/toggle_on_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import Footer from "./Footer";
import Header from './Header';

// 설정 페이지
export default function Setting() {
    return (<>
        <Header />
        <div id="wrap">
            <div id="container">
                <div id='content_gray'>
                    <div id="contentTop">
                        <Link to='/menu'><img src={arrow_back_ios_new} /></Link>
                        <div id='title'>설정</div>
                        <div>　</div>
                    </div>
                    <div id="mainSetting">
                        <div className='settingBox'>
                            <h3>개인정보</h3>
                            <div>
                                <div>홍길동</div>
                                <div>로그아웃</div>
                            </div>
                            <div>
                                <div>회원정보 관리</div>
                                <div><Link to='/myinfo'><img src={arrow_forward_ios} /></Link></div>
                            </div>
                            <div>
                                <div>자동 로그인</div>
                                <div><img src={toggle_on} className='toggleBtn' /></div>
                            </div>
                        </div>
                        <div className='settingBox'>
                            <h3>서비스 이용 설정</h3>
                            <div>
                                <div>마케팅 수신 동의</div>
                                <div><img src={toggle_on} className='toggleBtn' /></div>
                            </div>
                        </div>
                        <div className='settingBox'>
                            <h3>버전 정보</h3>
                            <div>현재 버전 V 1.1</div>
                            <div>최신 버전 V 1.1</div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <Footer />
    </>)
}