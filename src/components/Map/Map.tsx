import React, { useEffect } from 'react'

import './Map.css'

const Map = ({...props}) => {

  let map: (naver.maps.Map | null) = null;

  useEffect(() => {
    if(map === null) {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(33.4995687, 126.5311287),
        zoom: 15
      });
      new naver.maps.Size(600, 400);
      
      new naver.maps.Marker({
        position: new naver.maps.LatLng(33.4995687, 126.5311287),
        map: map
      }).setMap(map)
      new naver.maps.Marker({
        position: new naver.maps.LatLng(33.5330619, 126.6309226),
        map: map
      }).setMap(map)
    }
  }, [])

  useEffect(() => {
    const { lat, lng } = props.loc
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 15
    });
    new naver.maps.Size(600, 400);
    new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map
    })
  }, [props.loc])

  return (
    <div className='Map'>
      <button onClick={props.handleLoad}>Load my location</button>
      <div id='map'></div>
    </div>
  )
}

export default Map
