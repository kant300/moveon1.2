import "../assets/css/Index.css"
import Footer from "./Footer";
import Header from "./Header";
import calendar_clock from '../assets/images/icons/calendar_clock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import Category from './main/Category';
import Event from './main/Event';
import Weather from "./main/Weather";

// 메인 페이지
export default function Index() {
    return (<>
        <div id='wrap'>
            <div id="container">
                <Header />
                <div id='loginBox'>로그인 후 이용해주세요</div>
                <Weather />
                <Category />
                <Event />
                <div id='alertBox'>
                <img src={calendar_clock} />
                오늘의 알림 : 재활용 배출일입니다.
                </div>
                <Footer />
            </div>
        </div>
    </>)
}