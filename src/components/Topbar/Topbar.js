import React from 'react'
import { searchLens, notificationBell } from '../../assets'
import { IconSvg } from '../../assets/styles'
import { Heading2 } from '../../styles/typography'
import userPic from '../../assets/img/userPic.png'
import blackboxlogo from '../../assets/img/blackbox.png'
import {
  StyleTopbar,
  Search,
  AccountSection,
  User,
  Notification,
} from './styles'

export const Topbar = () => {
  return (
    <StyleTopbar>
      <img src={blackboxlogo} style={{ width: '15.5rem' }} alt='' />
      <Search>
        <input id='search' type='text' />
        <label for='search'>
          <IconSvg width='2rem' height='2rem'>
            <use xlinkHref={searchLens}></use>
          </IconSvg>
          Search
        </label>
      </Search>
      <AccountSection>
        <User>
          <img src={userPic} alt='user img' />
          <Heading2
            fontWeight='400'
            family="'Saira', sans-serif"
            color='#211c28'
          >
            Y. Gauli
          </Heading2>
        </User>
        <Notification>
          <IconSvg width='2.4rem' height='2.4rem'>
            <use xlinkHref={notificationBell}></use>
          </IconSvg>
        </Notification>
      </AccountSection>
    </StyleTopbar>
  )
}
