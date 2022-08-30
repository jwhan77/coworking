import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
    };
    
    const map = new naver.maps.Map('map', mapOptions);
    const size = new naver.maps.Size(600, 400);
  }, []);
  return (
    <div className="App">
      <div id="map"></div>
    </div>
  );
}

export default App;
