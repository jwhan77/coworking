import React from 'react';

import Modal from '../Modal/Modal';

import './Info.css'

const Info = ({...props}) => {
  return (
    <div className='InfoModal'>
      <Modal show={props.show} handleClose={props.handleClose}>
        <h1>{props.name}</h1>
        <div className='imgDiv'></div>
        <div className='address'>
          제주시 ... ({props.distance}km)
        </div>
        <div className='time'>
          평일 9-6
        </div>
      </Modal>
    </div>
  )
}

export default Info;