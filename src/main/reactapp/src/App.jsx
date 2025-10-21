import './assets/css/app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bulkbuygroup from './components/main/bulkbuygroup/bulkbuygroup';
import Index from "./components/Index.jsx";
import Menu from "./components/Menu.jsx";
import Setting from "./components/Setting.jsx";
import MyPage from "./components/MyPage.jsx";
import Station from './components/transport/Station.jsx';
import Test from './components/living/Test.jsx';
import Login from './components/main/Login.jsx';
import NotFound from './components/NotFound.jsx';
import Signup from './components/main/Signup.jsx';

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
          <Route path='/mypage' element={<MyPage />} /> 
          <Route path='/menu' element={<Menu />} />
          <Route path='/setting' element={<Setting />} />

          {/* living */}
          <Route path='/trashInfo' element={<Test />} />
          
          {/* safety */}

          {/* transport */}
          <Route path='/subway' element={<Station />} />

          {/* community */}
          <Route path='/bulkBuy' element={<Bulkbuygroup />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}