import React, { useEffect, useState } from 'react';
import haversine from 'haversine-distance';

import List from './components/List/List';
import Map from './components/Map/Map';
import Info from './components/Info/Info';

import { Space, Location } from './types';

import data from './data/data.json'

import './App.css';

const spaceList = [...data] as Space[]

function updateDistanceInData(data: Space[], loc1: Location) {
  return data.map(loc => {
    loc.distance = calculateDistance(loc1, loc.loc);
    return loc
  }).sort((a, b) => a.distance! - b.distance!)
}

function calculateDistance(loc1: Location, loc2: Location) {
  return +(haversine(loc1, loc2) * 0.001).toFixed(1)
}

const INITIAL_LOCATION = {'lat': 33.4995687, 'lng': 126.5311287}

function App() {
  const [currentLocation, setCurrentLocation] = useState(INITIAL_LOCATION);
  const [myData, setMyData] = useState(() => {
    const initialState = updateDistanceInData(spaceList, INITIAL_LOCATION);
    return initialState
  });
  const [selected, setSelected] = useState(0)
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const newData = updateDistanceInData(spaceList, currentLocation);
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

  const openInfoModal = (id: number) => {
    setSelected(id);
    setShowInfo(true);
  }

  const closeInfoModal = () => {
    setShowInfo(false);
  }

  return (
    <div className="App">
      <main>
        <aside>
          <List items={myData} handleSelect={openInfoModal} />
        </aside>
        <section>
          <div className='container'>
            <h1>Coworking space in Jeju</h1> 
            <Map handleLoad={loadCurrentLocation} loc={currentLocation} />
          </div>
          <Info show={showInfo} {...myData.filter(d => d.id === selected)[0]} handleClose={closeInfoModal} />
        </section>
      </main>
    </div>
  );
}

export default App;
