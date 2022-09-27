import React from 'react';

import img from '../../logo.svg';

import './ListItem.css';

const ListItem = (props: object) => {
  return (
    <div className='ListItem'>
      <div className='photo'>
        <img src={img} alt="" />
      </div>
      <div className='info'>
        <div className='name'>Name</div>
        <div className='distance'>1.1km</div>
        <span className='open'> &gt; </span>
      </div>
    </div>
  )
}

export default ListItem;