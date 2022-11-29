import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Topbar } from '../Topbar/Topbar'
import { StyleLayout, StyleMain } from './styles'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <>
      {pathname === '/triqbriq/login' ||
      pathname === '/triqbriq/signup' ||
      pathname === '/triqbriq/resetpassword' ? (
        <>{children}</>
      ) : (
        <StyleLayout>
          <Sidebar />
          <StyleMain>
            <Topbar />
            {children}
          </StyleMain>
        </StyleLayout>
      )}
    </>
  )
}

export default Layout
