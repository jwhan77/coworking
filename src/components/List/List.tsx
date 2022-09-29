import React from 'react'

import './List.css';

import { ListProps } from '../../types';
import ListItem from './ListItem';

const List = ({ items }: ListProps) => {
  return (
    <div className='List'>
      {items.map(item => {
        return <ListItem key={item.id} {...item} />
      })}
    </div>
  )
}

export default List