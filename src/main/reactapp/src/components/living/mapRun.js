export function mapRun() {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=9eb4f86b6155c2fa2f5dac204d2cdb35&autoload=false';
        script.async = true;
        script.onload = () => {
            kakao.maps.load(() => {
                var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                mapOption = { 
                    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            map.current = new kakao.maps.Map(mapContainer, mapOption); 
            });
        };
        document.head.appendChild(script);
    };