import React from 'react'
import { IconSvg } from '../../assets/styles'

import { crossSVG } from '../../assets'
import { Heading2, Heading3 } from '../../styles/typography'
import {
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalWrapper,
  ModelAddEdit,
  ModelCancel,
} from './style'
import { FormSection, MaterialDiv, MaterialsDiv } from './styleAddProject'
import { SizeField } from './materialStyle'

const Material = (props) => {
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
          <Heading3 fontWeight='400'>Material Name</Heading3>
          <input type='text' placeholder='Triqbriq Project 15' required />
          <SizeField>
            <div>
              <Heading3 fontWeight='400'>Length</Heading3>
              <input type='text' placeholder='2.15' required />
            </div>
            <div>
              <Heading3 fontWeight='400'>Width</Heading3>
              <input type='text' placeholder='2.15' required />
            </div>
            <div>
              <Heading3 fontWeight='400'>Height</Heading3>
              <input type='text' placeholder='2.15' required />
            </div>
            <div>
              <Heading3 fontWeight='400'>Quantity</Heading3>
              <input
                style={{ marginBottom: '0' }}
                type='text'
                placeholder='2.15'
                required
              />
            </div>
          </SizeField>
        </FormSection>

        <ModalFooter>
          <ModelCancel onClick={() => props.close('')}>Cancel</ModelCancel>
          <ModelAddEdit>Add</ModelAddEdit>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Material
