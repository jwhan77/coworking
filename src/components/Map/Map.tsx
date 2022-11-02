import React, { useEffect, useRef } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { Button } from 'react-bootstrap';

import { Space } from '../../types';

import './Map.css'

type MarkersType = {
  id: number
  marker: naver.maps.Marker
}

let map: (naver.maps.Map | null) = null;
let markers: MarkersType[] = [];

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
    const { lat, lng } = props.loc
    if(map === null) return;
    map.setCenter(new naver.maps.LatLng(lat, lng));
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

  useEffect(() => {
    if(props.selectedId === -1) return;
    const marker = markers.filter(m => m.id === props.selectedId)[0];
    marker.marker.setIcon({
      url: "http://static.naver.net/maps/mantle/2x/marker-default.png",
      size: {
        width: 44,
        height: 66
      }
    })
  }, [props.selectedId])

  const setMarkers = (map: naver.maps.Map, spaces: Space[]) => {
    if (markers) {
      for(let marker of markers) {
        marker.marker.setMap(null);
      }
      markers = [];
    }
    for(let space of spaces) {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(space.loc.lat, space.loc.lng),
        map: map
      });
      marker.setMap(map);
      naver.maps.Event.addListener(marker, "click", function(e) {
        props.openInfoModal(space.id);
      })
      markers.push({id: space.id, marker: marker});
    }
  }

  return (
    <div className='Map'>
      <Button className="loading" onClick={props.handleLoad}>Load my location</Button>
      <div id='map' ref={mapRef}></div>
    </div>
  )
}

export default Map
