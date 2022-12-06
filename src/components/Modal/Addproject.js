import { useState } from 'react'
import { Heading3, Heading2 } from '../../styles/typography'
import { IconSvg } from '../../assets/styles'
import { crossSVG } from '../../assets'
import briqs from '../../assets/img/briq.png'
import {
  ModalWrapper,
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModelCancel,
  ModelAddEdit,
} from './style'
import React from 'react'
import {
  FormSection,
  MaterialBtn,
  MaterialDiv,
  MaterialsDiv,
} from './styleAddProject'

const Addproject = (props) => {
  const materials = [
    { name: 'Briq 30', img: briqs, qty: 0 },
    { name: 'Briq 30', img: briqs, qty: 10 },
    { name: 'Briq 30', img: briqs, qty: 15 },
  ]

  let arr = [] // array to store quantity of the material
  materials.map((material, index) => arr.push(material.qty)) //pushing the quantity of material serially on empty arry
  const [materialQty, setMaterialQty] = useState(arr) // desclaring state to store the changes on quantity of material
  var newArr = [...materialQty] // storing material quantity arry to new variable for increasing or decreasing the specific material quantity

  // handel changes on quantity of material
  const handleChanges = (index, value) => {
    // this conditional doesnot let the quantity to be less than zero
    if (!newArr[index] && value === -1) {
      return
    }

    // increasing or decreasing the quantity of material
    newArr[index] = newArr[index] + value
    setMaterialQty(() => newArr)
  }
  return (
    <ModalWrapper>
      <ModalTitle>
        <Heading2 fontWeight='500'>Add Project</Heading2>
        <IconSvg
          width='1.8rem'
          height='1.8rem'
          fill='#fff'
          onClick={() => props.close('')}
        >
          <use xlinkHref={crossSVG}></use>
        </IconSvg>
      </ModalTitle>
      <ModalContent>
        <FormSection>
          <Heading3 fontWeight='400'>Project Name</Heading3>
          <input type='text' />
          <Heading3 fontWeight='400'>Project Type</Heading3>
          <input type='text' />
        </FormSection>
        <MaterialsDiv>
          {materials.map((material, index) => (
            <MaterialDiv>
              <div className='materials'>
                <img src={material.img} alt='' />
                <Heading2 fontWeight='600'> {material.name} </Heading2>
              </div>
              <div className='materialQuantity'>
                <span>Qty</span>
                <MaterialBtn onClick={() => handleChanges(index, -1)}>
                  -
                </MaterialBtn>
                <span>{materialQty[index]}</span>
                <MaterialBtn onClick={() => handleChanges(index, 1)}>
                  +
                </MaterialBtn>
              </div>
            </MaterialDiv>
          ))}
        </MaterialsDiv>
        <ModalFooter>
          <ModelCancel onClick={() => props.close('')}>Cancel</ModelCancel>
          <ModelAddEdit>Add</ModelAddEdit>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Addproject
