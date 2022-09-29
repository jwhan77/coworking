import React from 'react';

import type { Space } from '../../types';

import './ListItem.css';

const ListItem = ({id, imgSrc, name, lat, lng}: Space) => {
  return (
    <div className='ListItem'>
      <div className='photo'>
        <img src={imgSrc} alt="" />
      </div>
      <div className='info'>
        <div className='name'>{name}</div>
        <div className='distance'>1.1km</div>
      </div>
      <div className='open'> &gt; </div>
    </div>
  )
}

export default ListItem;