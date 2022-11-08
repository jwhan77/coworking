import React, { useEffect, useState } from 'react';
import haversine from 'haversine-distance';

import List from './components/List/List';
import Map from './components/Map/Map';
import Info from './components/Info/Info';

import { Space, Location, PlaceType } from './types';

import './App.css';

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
  const [centerLoc, setCenterLoc] = useState({'lat': 0, 'lng': 0});
  const [myData, setMyData] = useState<(Space[] | null)>(null);
  const [checked, setChecked] = useState<PlaceType>({coworking: true, cafe: true});
  const [selected, setSelected] = useState(-1);
  const [selectedItem, setSelectedItem] = useState<(Space | null)>(null);
  const [showInfo, setShowInfo] = useState(false);

  const selectedItems = myData ? myData.filter(item => checked[item.type]) : []

  const mapCenter = centerLoc.lat && centerLoc.lng ? centerLoc : currentLocation

  const fetchData = async() => {
    const response = await fetch('/.netlify/functions/getData')
    console.log(response);
    const data = await response.json();
    console.log(data); // {message: 'Hello world'}

    const spaceList = [...data] as Space[]

    const initialState = updateDistanceInData(spaceList, INITIAL_LOCATION);
    setMyData(initialState);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    if(!myData) return;
    const newData = updateDistanceInData([...myData], currentLocation);
    setMyData(newData)
  }, [currentLocation]);

  useEffect(() => {
    if(!myData) return;
    const newSelectedItem = selected === -1 ? myData.filter(d => d.id === 0)[0]: myData.filter(d => d.id === selected)[0];
    setSelectedItem(newSelectedItem);
  }, [selected, myData])

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

  const handleSelectListItem = (id: number) => {
    setSelected(id);
    setCenterLoc(myData!.filter(d => d.id === id)[0].loc);
  }

  const openInfoModal = (id: number) => {
    setSelected(id);
    setShowInfo(true);
  }

  const closeInfoModal = () => {
    setShowInfo(false);
  }

  const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedChecked = { ...checked };
    const selectedType = e.target.id.split('type-')[1];
    updatedChecked[selectedType as keyof PlaceType] = !updatedChecked[selectedType as keyof PlaceType];
    setChecked(updatedChecked)
  }

  return (
    <div className="App">
      <main>
        <aside>
          <List
            checked={checked}
            selectedItems={selectedItems}
            handleChangeType={handleChangeType}
            handleSelect={handleSelectListItem}
          />
        </aside>
        <section>
          <div className='container'>
            <Map handleLoad={loadCurrentLocation} loc={mapCenter} items={selectedItems} selectedId={selected} openInfoModal={openInfoModal} />
          </div>
          {selectedItem && (
            <Info show={showInfo} {...selectedItem} handleClose={closeInfoModal} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
