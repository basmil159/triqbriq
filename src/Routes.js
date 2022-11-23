import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'

const Router = () => {
  return (
    <Routes>
      <Route path='/triqbriq' element={<Projects />} />
      <Route path='/triqbriq/tools' element={<h1>Tools Page</h1>} />

      <Route path='/triqbriq/materials' element={<h1>Materials Page</h1>} />

      <Route path='/triqbriq/energy' element={<h1>Energy Page</h1>} />

      <Route path='/triqbriq/simulation' element={<h1>Simulation Page</h1>} />
    </Routes>
  )
}

export default Router
