import '../assets/css/footer.css'
import home from '../assets/images/icons/home_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import person from '../assets/images/icons/person_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import more_horiz from '../assets/images/icons/more_horiz_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg'
import { Link } from 'react-router-dom'

// Footer
export default function Footer() {
    return (<>
        <div id="footer">
            <Link to='/' className='menu'>
                <img src={home} className='icon' />
                <span>홈</span>
            </Link>
            <Link to='/mypage' className='menu'>
                <img src={person} className='icon' />
                <span>마이페이지</span>
            </Link>
            <Link to='/menu' className='menu'>
                <img src={more_horiz} className='icon' />
                <span>전체메뉴</span>
            </Link>
        </div>
    </>)
}