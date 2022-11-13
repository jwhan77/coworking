import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { closeModal } from '../../features/modal/modalSlice';

import { Modal } from 'react-bootstrap';

import locIcon from "./location-svgrepo-com.svg";
import timeIcon from "./time-svgrepo-com.svg";

const Info = () => {
  const dispatch = useAppDispatch();
  const { selectedSpace } = useAppSelector((store) => store.space);
  const { isOpen } = useAppSelector((store) => store.modal);

  return selectedSpace === null ? (
    <></>
  ) : (
    <Modal
      className="InfoModal"
      show={isOpen}
      onHide={() => dispatch(closeModal())}
      centered
      size='lg'
    >
      <Modal.Header closeButton>
        <Modal.Title>{selectedSpace.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='imgDiv'></div>
        <div className='address'>
          <span><img width={16} height={16} src={locIcon} alt="location" /></span>
          <span>{selectedSpace.address} ({selectedSpace.distance}km)</span>
        </div>
        <div className='time'>
          <span><img width={16} height={16} src={timeIcon} alt="business hours" /></span>
          {selectedSpace.hours?.map((line: string, i: number) => <span key={i}>{line}</span>)}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Info;