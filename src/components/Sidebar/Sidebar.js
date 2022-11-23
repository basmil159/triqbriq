import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  brifcaseSVG,
  energySVG,
  smLogoSVG,
  logoSVG,
  materialSVG,
  simulationSVG,
  toolSVG,
  arrowSVG,
} from '../../assets'

import { IconSvg } from '../../assets/styles'

import triqbriqLogo from '../../assets/img/TRIQBRIQ.png'
import {
  Divider,
  Links,
  LinkContainer,
  LinkIcon,
  LinkLabel,
  Logo,
  StyleSidebar,
  SidebarButton,
} from './styles'

import { useLocation } from 'react-router-dom'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { pathname } = useLocation()

  return (
    <>
      <SidebarButton
        isOpen={sidebarOpen}
        onClick={() => setSidebarOpen((p) => !p)}
      >
        <IconSvg width='1.4rem' height='1.4rem'>
          <use xlinkHref={arrowSVG}></use>
        </IconSvg>
      </SidebarButton>
      <StyleSidebar isOpen={sidebarOpen}>
        <Logo>
          {sidebarOpen ? (
            <IconSvg height='4.6rem' width={!sidebarOpen ? '0rem' : '19rem'}>
              <use xlinkHref={logoSVG}></use>
            </IconSvg>
          ) : (
            <>
              <IconSvg width='3.1rem' height='4.5rem'>
                <use xlinkHref={smLogoSVG}></use>
              </IconSvg>
            </>
          )}
        </Logo>

        {linksArray.map(({ icon, label, to }) => (
          <>
            <LinkContainer key={label} isActive={pathname === to}>
              <Links to={to}>
                <LinkIcon isActive={pathname === to}>{icon}</LinkIcon>
                {sidebarOpen && (
                  <>
                    <LinkLabel isActive={pathname === to}>{label}</LinkLabel>
                    {/* if notifications are at 0 or null, do not display */}
                  </>
                )}
              </Links>
            </LinkContainer>
            {label === 'Materials' ? <Divider /> : null}
          </>
        ))}

        {secondaryLinksArray.map(({ icon, label }) => (
          <LinkContainer
            key={label}
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              bottom: '4%',
              boxShadow: 'none',
              opacity: 0.8,
              transform: 'translateX(-50%)',
              left: '50%',
            }}
          >
            <Links
              to='/triqbriq'
              style={
                !sidebarOpen
                  ? { width: `100%`, justifyContent: 'center' }
                  : { justifyContent: 'center' }
              }
            >
              <LinkIcon>{icon}</LinkIcon>
            </Links>
            {sidebarOpen && (
              <LinkLabel
                style={{ color: '#fff', fontSize: '1.2rem', weight: '400' }}
              >
                {label}
              </LinkLabel>
            )}
          </LinkContainer>
        ))}
      </StyleSidebar>
    </>
  )
}

const linksArray = [
  {
    label: 'Projects',
    icon: (
      <IconSvg fill='#ffffff'>
        <use xlinkHref={brifcaseSVG}></use>
      </IconSvg>
    ),
    to: '/triqbriq',
  },
  {
    label: 'Tools',
    icon: (
      <IconSvg fill='#ffffff'>
        <use xlinkHref={toolSVG}></use>
      </IconSvg>
    ),
    to: '/triqbriq/tools',
  },
  {
    label: 'Materials',
    icon: (
      <IconSvg fill='#ffffff'>
        <use xlinkHref={materialSVG}></use>
      </IconSvg>
    ),
    to: '/triqbriq/materials',
  },
  {
    label: 'Energy',
    icon: (
      <IconSvg fill='#ffffff'>
        <use xlinkHref={energySVG}></use>
      </IconSvg>
    ),
    to: '/triqbriq/energy',
  },
  {
    label: 'Simulation',
    icon: (
      <IconSvg fill='#ffffff'>
        <use xlinkHref={simulationSVG}></use>
      </IconSvg>
    ),
    to: '/triqbriq/simulation',
  },
]

const secondaryLinksArray = [
  {
    label: '© 2022, All rights reserved by ARRTSM',
    icon: <img src={triqbriqLogo} alt='' />,
  },
]

export default Sidebar
