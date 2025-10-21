import { Link } from 'react-router-dom'
import '../assets/css/header.css'
import login from '../assets/images/icons/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'

// Header
export default function Header() {
    return (<>
        <div id="header">
            <Link to='/'>mOveOn</Link>
            <Link to='/login'>
                <img src={login} id="headerBtn" />
            </Link>
        </div>
    </>)
}