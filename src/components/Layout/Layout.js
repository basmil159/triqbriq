import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Topbar } from '../Topbar/Topbar'
import { StyleLayout, StyleMain } from './styles'

const Layout = ({ children }) => {
  return (
    <StyleLayout>
      <Sidebar />
      <StyleMain>
        <Topbar />
        {children}
      </StyleMain>
    </StyleLayout>
  )
}

export default Layout
