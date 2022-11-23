import React from 'react'
import Addproject from './Addproject'
import Material from './Material'
import { StyleModal, Background } from './style'

const Modal = (props) => {
  return (
    <StyleModal>
      <Background onClick={() => props.close('')} />
      {props.type === 'addProject' && <Addproject close={props.close} />}
      {props.type === 'viewproject' && <Addproject close={props.close} />}
      {props.type === 'addMaterial' && <Material close={props.close} />}
      {props.type === 'viewTool' && <Addproject close={props.close} />}
    </StyleModal>
  )
}

export default Modal
