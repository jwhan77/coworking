import React from 'react';

import Modal from '../Modal/Modal';

import './Info.css'

import locIcon from "./location-svgrepo-com.svg";
import timeIcon from "./time-svgrepo-com.svg";

const Info = ({...props}) => {
  return (
    <div className={`InfoModal ${props.show ? '' : 'hide'}`}>
      <Modal handleClose={props.handleClose}>
        <h1>{props.name}</h1>
        <div className='imgDiv'></div>
        <div className='address'>
          <span><img className='icon' src={locIcon} alt="location" /></span>
          <span>{props.address} ({props.distance}km)</span>
        </div>
        <div className='time'>
          <span><img className='icon' src={timeIcon} alt="business hours" /></span>
          {props.hours.map((line: string, i: number) => <span key={i}>{line}</span>)}
        </div>
      </Modal>
    </div>
  )
}

export default Info;