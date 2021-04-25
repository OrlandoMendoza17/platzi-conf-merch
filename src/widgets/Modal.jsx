import React from 'react'
import {createPortal} from 'react-dom'
import Button from './Button'

const Modal = ({size, message, handleButton1, handleButton2, children}) => {
  return createPortal(
    <div className={`Modal ${size? size : ''}`}>
      <div className="Modal__inner">
        <div className="Modal__inner--content">
          {children}
          <p>{message}</p>
        </div>
        <div className="Modal__inner--buttons">
          <Button handleClick={handleButton1} color="danger">
            Cancelar
          </Button>
          <Button handleClick={handleButton2} color="success">
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  , document.getElementById('modals'))
}

export default Modal;
