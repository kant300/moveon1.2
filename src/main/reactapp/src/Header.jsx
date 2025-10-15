import './assets/css/Header.css'
import login from './assets/images/login_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'

export default function Header() {
    return (<>
        <div id="header">
            <a href="#">mOveOn</a>
            <a href="#">
                <img src={login} id="headerBtn" />
            </a>
        </div>
    </>)
}