import '../assets/css/menu.css'
import Footer from "./Footer";
import notification_sound from '../assets/images/icons/notification_sound_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import settings from '../assets/images/icons/settings_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
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
import { Link } from 'react-router-dom';

// 전체메뉴 페이지
export default function Menu() {
    return (<>
        <div id="wrap">
            <div id="menu">
                <div id="menuTop">
                    <div>moveon1234</div>
                    <div>
                        <Link to='/notification'><img src={notification_sound} /></Link>
                        <Link to='/setting'><img src={settings} /></Link>
                    </div>
                </div>
                <div id='mainMenu'>
                    <div className='menuTitle'><span>●</span>제목</div>
                    <ul id='livingMenu'>
                        <Link to='/bill'><li><img src={paid} />공과금정산</li></Link>
                        <Link to='/trashInfo'><li><img src={recycling} />쓰레기 배출정보</li></Link>
                        <Link to='/clothingBin'><li><img src={apparel} />의류수거함</li></Link>
                        <Link to='/wheelchairCharger'><li><img src={ev_station} />전동휠체어</li></Link>
                        <Link to='/local_parking'><li><img src={local_parking} />공영주차장</li></Link> 
                    </ul>
                    <div className='menuTitle'><span>●</span>안전</div>
                    <ul id='safetyMenu'>
                        <Link to='/sexOffender'><li><img src={crisis_alert} />성범죄자 위치</li></Link>
                        <Link to='/ambulance'><li><img src={ambulance} />민간구급차</li></Link>
                        <Link to='/water'><li><img src={water_drop} />비상급수시설</li></Link>
                        <Link to='/shelter'><li><img src={night_shelter} />대피소</li></Link>
                    </ul>
                    <div className='menuTitle'><span>●</span>교통</div>
                    <ul id='transportMenu'>
                        <Link to='/subway'><li><img src={subway} />지하철</li></Link>
                        <Link to='/busStation'><li><img src={directions_bus} />버스정류장</li></Link>
                    </ul>
                    <div className='menuTitle'><span>●</span>커뮤니티</div>
                    <ul id='communityMenu'>
                        <Link to='/bulkBuy'><li><img src={handshake} />소분모임</li></Link>
                        <Link to='/localEvent'><li><img src={explore_nearby} />지역행사</li></Link>
                        <Link to='/localStore'><li><img src={storefront} />지역장터</li></Link>
                    </ul>
                    <div className='menuTitle'><span>●</span>고객센터</div>
                    <ul id='inquiryMenu'>
                        <Link to='/faq'><li>FAQ</li></Link>
                        <Link to='/inquiry'><li>문의하기</li></Link>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    </>)
}