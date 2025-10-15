import Footer from "./Footer";
import Header from "./Header";
import paid from './assets/images/paid_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import recycling from './assets/images/recycling_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import apparel from './assets/images/apparel_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import ev_station from './assets/images/ev_station_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import local_parking from './assets/images/local_parking_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import calendar_clock from './assets/images/calendar_clock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

export default function App() {
  return (<>
    <div id='wrap'>
      <div id="container">
        <Header />
        <div id='loginBox'>로그인 후 이용해주세요</div>
        <div id='weatherBox'>날씨</div>
        <ul id='categoryBox'>
          <li>생활</li>
          <li>안전</li>
          <li>교통</li>
          <li>카테고리</li>
        </ul>
        <ul id='btnBox'>
          <li><img src={paid} />공과금정산</li>
          <li><img src={recycling} />쓰레기 배출정보</li>
          <li><img src={apparel} />의류수거함 위치정보</li>
          <li><img src={ev_station} />전동휠체어</li>
        </ul>
        <div id='eventBox'>
          <ul id='eventCategory'>
            <li id='eventActive'>전시/문화</li>
            <li>축제/행사</li>
            <li>벼룩시장</li>
            <li>내위치반경</li>
          </ul>
          <ul id='eventList'>
            <li>지역문화행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li>
            <li>지역문화행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li>
            <li>지역문화행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li>
            <li>지역문화행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li>
            <li>지역문화행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li>
            <li>지역문화행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li>
          </ul>
        </div>
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