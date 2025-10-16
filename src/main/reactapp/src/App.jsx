import Footer from "./components/Footer";
import Header from "./components/Header";
import calendar_clock from './assets/images/icons/calendar_clock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import Category from './components/main/Category';
import Event from './components/main/Event';
import Weather from "./components/main/Weather";

export default function App() {
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
    </>
  )
}