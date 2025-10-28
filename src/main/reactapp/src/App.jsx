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
import Login from './components/member/Login.jsx';
import NotFound from './components/NotFound.jsx';
import Signup from './components/member/Signup.jsx';
import Trash from './components/living/Trash.jsx';
import ClothingBin from './components/living/ClothingBin.jsx';
import SexOffender from './components/safety/SexOffender.jsx';
import FindId from './components/member/FindId.jsx';
import FindPwd from './components/member/FindPwd.jsx';

// 현재 홈, 마이페이지, 전체메뉴, 설정까지 프로토타입 제작 완료
export default function App() {
  return (<>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />

          {/* main */}
          
          
          <Route path='/' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPwd' element={<FindPwd />} />
          <Route path='/mypage' element={<MyPage />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/setting' element={<Setting />} />

          {/* living */}
          <Route path='/living/trashInfo' element={<Trash />} />
          <Route path='/living/clothingBin' element={<ClothingBin />} />

          {/* safety */}
          <Route path='/safety/sexOffender' element={<SexOffender />} />

          {/* transport */}
          <Route path='/transport/subway' element={<Station />} />

          {/* community */}
          <Route path='/community/bulkBuy' element={<Bulkbuygroup />} />
          <Route path="/community/chatting/:bno" element={<Chatting />} />
          <Route path='/group/create' element={<Newcreate/>} />
          

        </Routes>
      </BrowserRouter>
    </>
  )
}