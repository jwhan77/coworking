import React, { useEffect, useState } from 'react';
import haversine from 'haversine-distance';

import List from './components/List/List';
import Map from './components/Map/Map';

import { Space, Location } from './types';

import { data } from './data'

import './App.css';


function updateDistanceInData(data: Array<Space>, loc1: Location) {
  return data.map(loc => {
    loc.distance = calculateDistance(loc1, loc.loc);
    return loc
  })
}

function calculateDistance(loc1: Location, loc2: Location) {
  return +(haversine(loc1, loc2) * 0.001).toFixed(1)
}

function App() {
  const [currentLocation, setCurrentLocation] = useState({'lat': 33.4995687, 'lng': 126.5311287});
  const [myData, setMyData] = useState(() => {
    const initialState = updateDistanceInData(data, currentLocation);
    return initialState
  });

  useEffect(() => {
    const newData = updateDistanceInData(data, currentLocation);
    setMyData(newData)
  }, [currentLocation]);

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
          <List items={myData} />
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
