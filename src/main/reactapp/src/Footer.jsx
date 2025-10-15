import './assets/css/Footer.css'
import home from './assets/images/home_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import person from './assets/images/person_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import more_horiz from './assets/images/more_horiz_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'

export default function Footer() {
    return (<>
        <div id="footer">
            <button className='menu'>
                <img src={home} className='icon' />
                <span>홈</span>
            </button>
            <button className='menu'>
                <img src={person} className='icon' />
                <span>마이페이지</span>
            </button>
            <button className='menu'>
                <img src={more_horiz} className='icon' />
                <span>전체메뉴</span>
            </button>
        </div>
    </>)
}