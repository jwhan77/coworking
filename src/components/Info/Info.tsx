import React from 'react';

import { Modal } from 'react-bootstrap';

import locIcon from "./location-svgrepo-com.svg";
import timeIcon from "./time-svgrepo-com.svg";

const Info = ({...props}) => {
  return (
    <Modal className="InfoModal" show={props.show} onHide={props.handleClose} centered size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='imgDiv'></div>
        <div className='address'>
          <span><img width={16} height={16} src={locIcon} alt="location" /></span>
          <span>{props.address} ({props.distance}km)</span>
        </div>
        <div className='time'>
          <span><img width={16} height={16} src={timeIcon} alt="business hours" /></span>
          {props.hours.map((line: string, i: number) => <span key={i}>{line}</span>)}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Info;