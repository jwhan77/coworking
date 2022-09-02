import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    var container = document.getElementById('map')!; //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.5330619, 126.6309226), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);
  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default App;
