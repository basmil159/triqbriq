import { Heading3, Btns, Heading2, Mdtext } from '../../styles/typography'
import { IconSvg } from '../../assets/styles'
import { crossSVG } from '../../assets'
import { ModalWrapper, ModalTitle, ModalContent } from './style'
import React from 'react'

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
      <ModalContent></ModalContent>
    </ModalWrapper>
  )
}

export default Addproject
