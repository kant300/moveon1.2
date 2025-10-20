import { BrowserRouter, Link } from "react-router-dom";
import { useState } from "react";

export default function Event() {
    const [event, setEvent] = useState(0);
    
    return (<>
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
                        </>
                    ):null
                }
            </ul>
        </div>
    </>)
}