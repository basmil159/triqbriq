import React from 'react'
import Addproject from './Addproject'
import { StyleModal, Background } from './style'

const Modal = (props) => {
  return (
    <StyleModal>
      <Background onClick={() => props.close('')} />
      {props.type === 'add' && <Addproject close={props.close} />}
    </StyleModal>
  )
}

export default Modal
