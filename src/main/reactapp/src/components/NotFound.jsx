import '../assets/css/notfound.css'
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function NotFound() {
    return (<>
        <Header />
        <div id="wrap">
            <div id="container" style={{width: '420px', height: '86vh'}}>
                <div>존재하지 않는 페이지입니다.</div>
                <Link to='/'>메인 화면으로 가기</Link>
            </div>
        </div>
        <Footer />
    </>)
}