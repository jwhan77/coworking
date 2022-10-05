import React from 'react';

import type { Space } from '../../types';

import './ListItem.css';

const ListItem = ({...props}) => {
  return (
    <div className='ListItem' onClick={props.handleClick}>
      <div className='photo'>
        <img src={props.imgSrc} alt="" />
      </div>
      <div className='info'>
        <div className='name'>{props.name}</div>
        <div className='distance'>{props.distance}km</div>
      </div>
      <div className='open'> &gt; </div>
    </div>
  )
}

export default ListItem;