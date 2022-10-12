import React, { useState } from 'react'

import './List.css';

import { Space } from '../../types';
import ListItem from './ListItem';

type ListProps = {
  items: Space[]
  handleSelect: Function
}

interface PlaceType {
  coworking: boolean,
  cafe: boolean
}

const List = ({ items, handleSelect }: ListProps) => {
  const [checked, setChecked] = useState<PlaceType>({coworking: true, cafe: true});
  const selectedItems = items.filter(item => checked[item.type])

  const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedChecked = { ...checked };
    const selectedType = e.target.id.split('type-')[1];
    updatedChecked[selectedType as keyof PlaceType] = !updatedChecked[selectedType as keyof PlaceType];
    setChecked(updatedChecked)
  }

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