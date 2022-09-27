import React, { useEffect } from 'react';
import './App.css';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {
  useEffect(() => {
    // const mapOptions = {
    //   center: new naver.maps.LatLng(37.3595704, 127.105399),
    //   zoom: 10
    // };
    
    // const map = new naver.maps.Map('map', mapOptions);
    // const size = new naver.maps.Size(600, 400);
  }, []);
  return (
    <div className="App">
      <header></header>
      <main>
        <aside>
          <List />
        </aside>
        <section>
          <Map />
        </section>
      </main>
    </div>
  );
}

export default App;
