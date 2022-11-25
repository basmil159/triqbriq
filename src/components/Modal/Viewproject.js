import React from 'react'
import { IconSvg } from '../../assets/styles'
import { Heading2, Mdtext } from '../../styles/typography'
import briq from '../../assets/img/BRIQ-30.png'
import briq2 from '../../assets/img/BRIQ-302.png'
import briq3 from '../../assets/img/BRIQ-303.png'

import {
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalWrapper,
  ModelAddEdit,
  ModelCancel,
} from './style'
import { crossSVG } from '../../assets'
import { ViewTable } from './viewProjectStyle'
const Viewproject = (props) => {
  return (
    <ModalWrapper>
      <ModalTitle>
        <Heading2 fontWeight='500'>{props.project}</Heading2>
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
        <ViewTable>
          <tr>
            <th>
              <Mdtext>Project Name</Mdtext>
            </th>
            <td>
              <input type='text' value={props.project} />
            </td>
          </tr>
          <tr>
            <th>
              <Mdtext>Project Type</Mdtext>
            </th>
            <td>
              <input type='text' value='custom' />
            </td>
          </tr>
          <tr>
            <th>
              <Mdtext> No. of BRIQ-30</Mdtext> <img src={briq} alt='' />
            </th>
            <td>
              <input type='number' value='45' />
            </td>
          </tr>
          <tr>
            <th>
              <Mdtext> No. of BRIQ-30</Mdtext> <img src={briq2} alt='' />
            </th>
            <td>
              <input type='number' value='120' />
            </td>
          </tr>
          <tr>
            <th>
              <Mdtext> No. of BRIQ-30</Mdtext> <img src={briq3} alt='' />
            </th>
            <td>
              <input type='number' value='250' />
            </td>
          </tr>
        </ViewTable>
        <ModalFooter>
          <ModelCancel onClick={() => props.close('')}>Cancel</ModelCancel>
          <ModelAddEdit>Edit</ModelAddEdit>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  )
}

export default Viewproject
