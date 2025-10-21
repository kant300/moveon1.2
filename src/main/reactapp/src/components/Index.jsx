import "../assets/css/index.css"
import Footer from "./Footer";
import Header from "./Header";
import calendar_clock from '../assets/images/icons/calendar_clock_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import paid from '../assets/images/icons/paid_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import recycling from '../assets/images/icons/recycling_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import apparel from '../assets/images/icons/apparel_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import ev_station from '../assets/images/icons/ev_station_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import local_parking from '../assets/images/icons/local_parking_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import crisis_alert from '../assets/images/icons/crisis_alert_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import ambulance from '../assets/images/icons/ambulance_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import water_drop from '../assets/images/icons/water_drop_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import night_shelter from '../assets/images/icons/night_shelter_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import subway from '../assets/images/icons/subway_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import directions_bus from '../assets/images/icons/directions_bus_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import handshake from '../assets/images/icons/handshake_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import explore_nearby from '../assets/images/icons/explore_nearby_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import storefront from '../assets/images/icons/storefront_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { useState } from 'react'
import { Link } from "react-router-dom";

// 메인 페이지
export default function Index() {
    const [category, setCategory] = useState(0);
    const [event, setEvent] = useState(0);

    return (<>
        <Header />
        <div id='wrap'>
            <div id="container">
                <div id='loginBox'>로그인 후 이용해주세요</div>
                <div id='weatherBox'>
                    <div id='weatherDiv'>날씨</div>
                </div>
                <ul id='categoryBox'>
                    <li onClick={() => {setCategory(0)}}>생활</li>
                    <li onClick={() => {setCategory(1)}}>안전</li>
                    <li onClick={() => {setCategory(2)}}>교통</li>
                    <li onClick={() => {setCategory(3)}}>커뮤니티</li>
                </ul>
                    <ul id='btnBox'>
                        {
                            category==0?(
                                <>
                                    <Link to='/bill'><li><img src={paid} />공과금정산</li></Link>
                                    <Link to='/trashInfo'><li><img src={recycling} />쓰레기 배출정보</li></Link>
                                    <Link to='/clothingBin'><li><img src={apparel} />의류수거함</li></Link>
                                    <Link to='/wheelchairCharger'><li><img src={ev_station} />전동휠체어</li></Link>
                                </>
                            ):
                            category==1?(
                                <>
                                    <Link to='/sexOffender'><li><img src={crisis_alert} />성범죄자 위치</li></Link>
                                    <Link to='/ambulance'><li><img src={ambulance} />민간구급차</li></Link>
                                    <Link to='/water'><li><img src={water_drop} />비상급수시설</li></Link>
                                    <Link to='/shelter'><li><img src={night_shelter} />대피소</li></Link>
                                </>
                            ):
                            category==2?(
                                <>
                                    <Link to='/subway'><li><img src={subway} />지하철</li></Link>
                                    <Link to='/busStation'><li><img src={directions_bus} />버스정류장</li></Link>
                                    <Link to='/'><li></li></Link>
                                    <Link to='/'><li></li></Link>
                                </>
                            ):
                            category==3?(
                                <>
                                    <Link to='/bulkBuy'><li><img src={handshake} />소분모임</li></Link>
                                    <Link to='/localEvent'><li><img src={explore_nearby} />지역행사</li></Link>
                                    <Link to='/localStore'><li><img src={storefront} />지역장터</li></Link>
                                    <Link to='/'><li></li></Link>
                                </>
                            ):null
                        }
                    </ul>
                <div id='eventBox'>
                    <ul id='eventCategory'>
                        <li onClick={() => {setEvent(0)}}>전시/문화</li>
                        <li onClick={() => {setEvent(1)}}>축제/행사</li>
                        <li onClick={() => {setEvent(2)}}>벼룩시장</li>
                        <li onClick={() => {setEvent(3)}}>내위치반경</li>
                    </ul>
                    <ul id='eventList'>
                        {
                            event==0?(
                                <>
                                    <Link to='/article?id=0'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                </>
                            ):
                            event==1?(
                                <>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                </>
                            ):
                            event==2?(
                                <>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                </>
                            ):
                            event==3?(
                                <>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역문화행사 - 박물관 전시회 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역축제행사 - 불꽃놀이 축제 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                    <Link to='/article'><li>지역벼룩시장 - 벼룩시장 일정 (부평구) <span>2025.09.20</span></li></Link>
                                </>
                            ):null
                        }
                    </ul>
                </div>
                <div id='alertBox'>
                    <img src={calendar_clock} />
                    오늘의 알림 : 재활용 배출일입니다.
                </div>
            </div>
        </div>
        <Footer />
    </>)
}