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
      const size = new naver.maps.Size(600, 400);
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(33.4995687, 126.5311287),
        map: map
      })
    }
  }, [])

  useEffect(() => {
    const { lat, lng } = props.loc
    map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(lat, lng),
      zoom: 15
    });
    const size = new naver.maps.Size(600, 400);
    const marker = new naver.maps.Marker({
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
