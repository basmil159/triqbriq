import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import { Material } from './pages/Material/Material'
import Energy from './pages/Energy/Energy'

const Router = () => {
  return (
    <Routes>
      <Route path='/triqbriq' element={<Projects />} />
      <Route path='/triqbriq/tools' element={<h1>Tools Page</h1>} />

      <Route path='/triqbriq/materials' element={<Material />} />

      <Route path='/triqbriq/energy' element={<Energy />} />

      <Route path='/triqbriq/simulation' element={<h1>Simulation Page</h1>} />
    </Routes>
  )
}

export default Router