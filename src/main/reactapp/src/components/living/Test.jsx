import { mapRun } from "./mapRun.js"
import { useEffect, useRef } from "react"

export default function Test() {
    const mapRef = useRef(null);

    useEffect(() => {
        mapRun(mapRef);
    }, []);
    
    

    return (<>
        <div>test</div>
        <div id="map" style={{width: '300px', height: '350px'}}></div>
    </>)
}

