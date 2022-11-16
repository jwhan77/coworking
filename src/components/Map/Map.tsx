import React, { useEffect, useRef, useCallback } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { setSelectedId, calculateSelectedItem } from '../../features/space/spaceSlice';
import { setCurrentPos, setCenterPos } from '../../features/map/mapSlice';
import { openModal } from '../../features/modal/modalSlice';
import { Button } from 'react-bootstrap';

import { Space } from '../../types';

import './Map.css'

const naver = window.naver;
type MarkersType = {
  id: number
  marker: typeof naver.maps.Marker
  ev: typeof naver.maps.MapEventListener
}

let map: (typeof naver.maps.Map | null) = null;
let markers: MarkersType[] = [];

const Map = () => {
  const dispatch = useAppDispatch();
  const { spaceItems, selectedItems, selectedId, selectedSpace } = useAppSelector((store) => store.space);
  const { centerPos } = useAppSelector((store) => store.map);

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
    const { lat, lng } = centerPos
    if(map === null) return;
    map.setCenter(new naver.maps.LatLng(lat, lng));
  }, [centerPos])

  useEffect(() => {
    if(mapRef !== null && width && height) {
      const mapDiv = mapRef.current as unknown as HTMLDivElement;
      mapDiv.style.width = `${width - 400}px`
      mapDiv.style.height = `${height}px`
    }
  }, [width, height]);

  useEffect(() => {
    if (map !== null) {
      setMarkers(map, selectedItems);
    }
  }, [selectedItems])

  useEffect(() => {
    if(selectedId === -1) return;
    dispatch(calculateSelectedItem())
    const pos = spaceItems.filter(space => space.id === selectedId)[0].loc;
    dispatch(setCenterPos(pos))
    dispatch(openModal())
  }, [selectedId])

  const setMarkers = (map: typeof naver.maps.Map, spaces: Space[]) => {
    if (markers) {
      for(let marker of markers) {
        marker.marker.setMap(null);
        naver.maps.Event.removeListener(marker.ev);
      }
      markers = [];
    }
    for(let space of spaces) {
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(space.loc.lat, space.loc.lng),
        map: map
      });
      const contentString = [
        '<div class="marker-tooltip">',
          space.name,
        '</div>'
      ].join('');
      const infoTooltip = new naver.maps.InfoWindow({
        content: contentString
      });
      naver.maps.Event.addListener(marker, "mouseover", function(e: MouseEvent) {
        infoTooltip.open(map, marker);
      }) 
      naver.maps.Event.addListener(marker, "mouseout", function(e: MouseEvent) {
        infoTooltip.close();
      })
      marker.setMap(map);
      const ev = naver.maps.Event.addListener(marker, "click", function(e: MouseEvent) {
        dispatch(setSelectedId(space.id))
        dispatch(openModal())
      })
      markers.push({id: space.id, marker: marker, ev: ev});
    }
  }
    
  const handleLoad = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateLocation)
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  const updateLocation = (position: GeolocationPosition) => {
    const pos = {'lat': position.coords.latitude, 'lng': position.coords.longitude}
    dispatch(setCurrentPos(pos));
  }

  return (
    <div className='Map'>
      <Button className="loading" onClick={handleLoad}>Load my location</Button>
      <div id='map' ref={mapRef}></div>
    </div>
  )
}

export default Map
