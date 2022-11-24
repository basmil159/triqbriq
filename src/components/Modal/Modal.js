import React from 'react'
import Addproject from './Addproject'
import Material from './Material'
import { StyleModal, Background } from './style'
import Viewproject from './Viewproject'

const Modal = (props) => {
  return (
    <StyleModal>
      <Background onClick={() => props.close('')} />
      {props.type === 'addProject' && <Addproject close={props.close} />}
      {props.type === 'viewproject' && (
        <Viewproject close={props.close} project={props.project} />
      )}
      {props.type === 'addMaterial' && <Material close={props.close} />}
      {props.type === 'viewTool' && <Addproject close={props.close} />}
    </StyleModal>
  )
}

export default Modal
