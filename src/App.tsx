import React, { useState } from 'react';

import List from './components/List/List';
import Map from './components/Map/Map';

import { data } from './data'

import './App.css';

function App() {
  const [currentLocation, setCurrentLocation] = useState({'lat': 33.4995687, 'lng': 126.5311287});

  const loadCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateLocation)
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  const updateLocation = (position: GeolocationPosition) => {
    setCurrentLocation({'lat': position.coords.latitude, 'lng': position.coords.longitude})
  }

  return (
    <div className="App">
      <header></header>
      <main>
        <aside>
          <List items={data} currentLocation={currentLocation} />
        </aside>
        <section>
          <button onClick={loadCurrentLocation}>Load my location</button>
          <div>
            My location: { currentLocation.lat }, { currentLocation.lng }
          </div>
          <Map />
        </section>
      </main>
    </div>
  );
}

export default App;
