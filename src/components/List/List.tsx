import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleSpaceType, setSelectedId } from '../../features/space/spaceSlice';

import ListItem from './ListItem';

import './List.css';

const List = () => {
  const dispatch = useAppDispatch();
  const { selectedItems, spaceType } = useAppSelector((store) => store.space);

  const handleChangeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.id.split('type-')[1];
    dispatch(toggleSpaceType(type))
  }

  const handleSelect = (id: number) => {
    dispatch(setSelectedId(id));
  }

  return (
    <div className='List'>
      <div className='SelectType'>
        <div>
          <input
            type="checkbox"
            id="type-coworking"
            checked={spaceType.coworking}
            onChange={handleChangeType}
          />
          <label htmlFor='type-coworking'>Coworking</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="type-cafe"
            checked={spaceType.cafe}
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