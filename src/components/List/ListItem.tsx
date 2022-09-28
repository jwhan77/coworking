import React from 'react';

import './ListItem.css';

interface Space {
  name?: string;
  imgSrc?: string;
  lat?: number,
  lng?: number
}

const ListItem = ({imgSrc, name, lat, lng}: Space) => {
  return (
    <div className='ListItem'>
      <div className='photo'>
        <img src={imgSrc} alt="" />
      </div>
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='distance'>1.1km</div>
        <span className='open'> &gt; </span>
      </div>
    </div>
  )
}

export default ListItem;