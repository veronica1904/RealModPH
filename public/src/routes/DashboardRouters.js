import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Home from '../Components/home/Home'

import NavBars from '../Components/NavBars'




const DashboardRouters = () => {
  return (
    <div>
      <>
      <NavBars/>
        <Routes>
        <Route path="/" element={<Home />}/>
          
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    
      </>
    </div>
  )
}

export default DashboardRouters