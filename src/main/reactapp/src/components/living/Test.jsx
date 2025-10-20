import { mapRun } from "./mapRun.js"
import { useEffect, useRef } from "react"

export default function Test() {
    const map = useRef(null);

    useEffect(() => {
        mapRun(map);
    }, []);
    
    

    return (<>
        <div>test</div>
        <div id="map" style={{width: '300px', height: '350px'}}></div>
    </>)
}

