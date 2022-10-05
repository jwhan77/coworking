import React from 'react'

import './Modal.css'

const Modal = ({ ...props }) => {
  const handleOutsideClicked = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    props.handleClose();
  }

  const handleInsideClicked = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div className='Modal' onClick={handleOutsideClicked}>
      <div className='content' onClick={handleInsideClicked}>
        <div className='close' onClick={props.handleClose}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;