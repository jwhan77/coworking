import React from 'react'

import './ListItem.css';

import spaceImg from '../../assets/workspace1.jpg'
import { Space } from '../../types';

type ListItemProps = {
  space: Space
  handleClick: React.MouseEventHandler<HTMLElement>
}

const ListItem = ({ space, handleClick}: ListItemProps) => {
  return (
    <div className='ListItem' onClick={handleClick}>
      <div className='photo'>
        <img src={spaceImg} alt="" />
      </div>
      <div className='info'>
        <div className='name'>{space.name.length > 10 ? `${space.name.substring(0, 10)}...` : space.name}</div>
        <div className='distance'>{space.distance}km</div>
      </div>
      <div className='open'> &gt; </div>
    </div>
  )
}

export default ListItem;