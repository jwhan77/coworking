import React, { useEffect, useRef } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Button } from 'react-bootstrap';

import { Space } from '../../types';

import './Map.css'

let map: (naver.maps.Map | null) = null;
let markers: naver.maps.Marker[] = [];

function setMarkers(map: naver.maps.Map, spaces: Space[]) {
  if (markers) {
    for(let marker of markers) {
      marker.setMap(null);
    }
    markers = [];
  }
  for(let space of spaces) {
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(space.loc.lat, space.loc.lng),
      map: map
    });
    marker.setMap(map);
    markers.push(marker);
  }
}

const Map = ({...props}) => {
  const { width, height } = useWindowSize()
  const mapRef = useRef(null);

  useEffect(() => {
    if(map === null) {
      map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(33.4995687, 126.5311287),
        zoom: 15
      });
      new naver.maps.Size(window.innerWidth - 400, window.innerHeight);
    }
  }, [])

  useEffect(() => {
    if(map === null) return;
    const { lat, lng } = props.loc
    new naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: map
    })
  }, [props.loc])

  useEffect(() => {
    if(mapRef !== null && width && height) {
      const mapDiv = mapRef.current as unknown as HTMLDivElement;
      mapDiv.style.width = `${width - 400}px`
      mapDiv.style.height = `${height}px`
    }
  }, [width, height]);

  useEffect(() => {
    if (map !== null) {
      setMarkers(map, props.items);
    }
  }, [props.items])

  return (
    <div className='Map'>
      <Button className="loading" onClick={props.handleLoad}>Load my location</Button>
      <div id='map' ref={mapRef}></div>
    </div>
  )
}

export default Map
