import './assets/css/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bulkbuygroup from './components/community/bulkbuygroup.jsx';
import Index from "./components/Index";
import Menu from "./components/Menu";
import Setting from "./components/Setting";
import MyPage from "./components/MyPage";
import Station from './components/transport/Station.jsx';
import Newcreate from './components/community/newcreate.jsx';
import Chatting from './components/community/chatting.jsx';

// 현재 홈, 마이페이지, 전체메뉴, 설정까지 프로토타입 제작 완료
export default function App() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path='/chatting' element={<Chatting /> } />
          <Route path='/bulkBuy' element={<Bulkbuygroup />} />
          <Route path='/group/create' element={<Newcreate/>} />
          <Route path='/' element={<Index />} />
          <Route path='/mypage' element={<MyPage />} /> 
          <Route path='/menu' element={<Menu />} />
          <Route path='/setting' element={<Setting />} />

          {/* living */}

          <Route path='/subway' element={<Station />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}