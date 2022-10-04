import React from 'react'

import './Modal.css'

const Modal = ({ ...props }) => {
  return (
    <div className={`Modal ${props.show? '': 'hide'}`}>
      <div className='content'>
        <div className='close' onClick={props.handleClose}>
          <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;