import React, { useState } from 'react'

import './List.css';

import { Space, PlaceType } from '../../types';
import ListItem from './ListItem';

type ListProps = {
  checked: PlaceType
  selectedItems: Space[],
  handleChangeType: React.ChangeEventHandler<HTMLInputElement>,
  handleSelect: Function
}

const List = ({ checked, selectedItems, handleChangeType, handleSelect }: ListProps) => {
  return (
    <div className='List'>
      <div className='SelectType'>
        <div>
          <input
            type="checkbox"
            id="type-coworking"
            checked={checked.coworking}
            onChange={handleChangeType}
          />
          <label htmlFor='type-coworking'>Coworking</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="type-cafe"
            checked={checked.cafe}
            onChange={handleChangeType}
          />
          <label htmlFor='type-cafe'>Cafe</label>
      </div>
      </div>
      <div className='items'>
        {selectedItems.map(item => {
          return <ListItem key={item.id} space={item} handleClick={() => handleSelect(item.id)} />
        })}
      </div>
    </div>
  )
}

export default List