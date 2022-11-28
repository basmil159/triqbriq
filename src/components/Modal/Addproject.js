import { useRef } from 'react'
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
import { FormSection, MaterialDiv, MaterialsDiv } from './styleAddProject'

const Addproject = (props) => {
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
          <MaterialDiv>
            <div className='materials'>
              <img src={briqs} alt='' />
              <Heading2 fontWeight='600'> BRIQ 30 </Heading2>
            </div>
            <div className='materialQuantity'>
              <span>Qty</span>
              <button>-</button>
              <span>10</span>
              <button>+</button>
            </div>
          </MaterialDiv>
          <MaterialDiv>
            <div className='materials'>
              <img src={briqs} alt='' />
              <Heading2 fontWeight='600'> BRIQ 30 </Heading2>
            </div>
            <div className='materialQuantity'>
              <span>Qty</span>
              <button>-</button>
              <span>10</span>
              <button>+</button>
            </div>
          </MaterialDiv>
          <MaterialDiv>
            <div className='materials'>
              <img src={briqs} alt='' />
              <Heading2 fontWeight='600'> BRIQ 30 </Heading2>
            </div>
            <div className='materialQuantity'>
              <span>Qty</span>
              <button>-</button>
              <span>10</span>
              <button>+</button>
            </div>
          </MaterialDiv>
          <MaterialDiv>
            <div className='materials'>
              <img src={briqs} alt='' />
              <Heading2 fontWeight='600'> BRIQ 30 </Heading2>
            </div>
            <div className='materialQuantity'>
              <span>Qty</span>
              <button>-</button>
              <span>10</span>
              <button>+</button>
            </div>
          </MaterialDiv>
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
