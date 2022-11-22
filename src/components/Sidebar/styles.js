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
  justify-content: space-between;
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
  position: absolute;
  left: ${({ isOpen }) => (!isOpen ? `9.5rem` : `23.5rem `)};
  top: 4rem;
  z-index: 99;
  border-radius: 50%;
  background: ${lightTheme.bg};
  height: 4rem;
  width: 4rem;
  align-items: center;
  border: none;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
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

export const LinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpace} / 2) ${v.smSpace};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${lightTheme.primary};
  color: white;
  margin-right: ${v.mdSpace};
`
