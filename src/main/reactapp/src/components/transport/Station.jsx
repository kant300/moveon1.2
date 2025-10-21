import { Run, moveToInitialPosition } from "../../assets/script/transport/station"
import { useEffect, useRef } from "react";
import Footer from "../Footer";
import Header from "../Header";
import my_location from "../../assets/images/icons/my_location_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
import "../../assets/css/transport/Station.css"

export default function Station() {
    const mapRef = useRef(null);
    const pos = useRef(null);

    useEffect(() => {
        Run(mapRef, pos);
    }, []);

    return (<>
        <div id="wrap">
        <Header />
            <div id="container">
                <div id="map" style={{width: '420px', height: '79vh'}}>
                    <div id="mapText">지하철 엘리베이터/에스컬레이터 위치 정보</div>
                    <button id="mapLocation" type="button" onClick={() => moveToInitialPosition(mapRef, pos)}><img src={my_location}/></button>
                </div>
            </div>
        <Footer />
    </div>
    </>)
}