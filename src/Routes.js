import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import { Material } from './pages/Material/Material'
import Energy from './pages/Energy/Energy'
import { Tools } from './pages/Tool/Tools'
import Login from './pages/Forms/Login/Login'
import Signup from './pages/Forms/SignUp/SignUp'
import ResetPassword from './pages/Forms/ResetPassword/ResetPassword'

const Router = () => {
  return (
    <Routes>
      <Route path='/triqbriq' element={<Projects />} />
      <Route path='/triqbriq/tools' element={<Tools />} />

      <Route path='/triqbriq/materials' element={<Material />} />

      <Route path='/triqbriq/energy' element={<Energy />} />

      <Route path='/triqbriq/login' element={<Login />} />

      <Route path='/triqbriq/signup' element={<Signup />} />
      <Route path='/triqbriq/resetpassword' element={<ResetPassword />} />

      <Route path='/triqbriq/reset-password' element={<Energy />} />

      <Route path='/triqbriq/simulation' element={<h1>Tools Page</h1>} />
    </Routes>
  )
}

export default Router
