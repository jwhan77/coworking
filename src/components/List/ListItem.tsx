import React, { useState, useEffect } from 'react';
import haversine from 'haversine-distance';

import type { Space, Location } from '../../types';

import './ListItem.css';

interface ListItemProps extends Space {
  currentLocation: Location
}

const ListItem = ({id, type, imgSrc, name, lat, lng, currentLocation}: ListItemProps) => {
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    setDistance(+(haversine(currentLocation, {lat, lng}) * 0.001).toFixed(1))
  }, [currentLocation]);

  return (
    <div className='ListItem'>
      <div className='photo'>
        <img src={imgSrc} alt="" />
      </div>
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='distance'>{distance}km</div>
      </div>
      <div className='open'> &gt; </div>
    </div>
  )
}

export default ListItem;