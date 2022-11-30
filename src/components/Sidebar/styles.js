import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { smooth, v } from '../../styles/variables'

import { lightTheme } from '../../styles/theme'

export const StyleSidebar = styled.div`
  ${smooth};
  width: ${({ isOpen }) => (!isOpen ? `12.4rem` : v.sidebarWidth)};
  background: ${lightTheme.bg};
  height: 100vh;
  padding: ${v.xlSpace};
  overflow: hidden;
  position: relative;
`

export const Logo = styled.div`
  ${smooth};
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;
  margin-bottom: ${v.xxlSpace};
  margin-bottom: 5.5rem;
`
export const SidebarButton = styled.button`
  ${smooth};
  display: flex;
  position: fixed;
  left: ${({ isOpen }) => (!isOpen ? `9.8rem` : `23.7rem `)};
  top: 4rem;
  z-index: 1;
  border-radius: 50%;
  background: ${lightTheme.bg2};
  height: 4rem;
  width: 4rem;
  align-items: center;
  border: 1px solid #dadada;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;

  :hover {
    background: #0072bc;
    border-color: ${lightTheme.bgAlpha};

    svg {
      fill: ${lightTheme.bgAlpha};
    }
  }
  svg {
    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
    fill: ${lightTheme.bg};
  }
`

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${lightTheme.bg4};
  margin: ${v.lgSpace} 0;
`

export const LinkContainer = styled.div`
  ${smooth};
  background: ${({ theme, isActive }) =>
    !isActive ? `transparent` : theme.bg4};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${lightTheme.bg4};
  }
`

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  font-size: 18px;
  font-family: 'saira';
  padding: ${v.smSpace} 0;
`

export const LinkIcon = styled.div`
  padding: ${v.smSpace} ${v.mdSpace};
  display: flex;

  svg {
    height: 20px;
    width: 20px;
    fill: ${({ isActive }) => (!isActive ? `#0072bc` : `#fff`)};
  }
`

export const LinkLabel = styled.span`
  display: block;
  flex: 1;
  color: ${({ isActive }) => (!isActive ? '#0072bc' : `#ffffff`)};
  width: max-content;
  margin-left: ${v.smSpace};
`
