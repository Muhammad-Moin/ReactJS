import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../Header/index'


const Layout = ({children}) => {
  return (
    <div>      
       <Headers />
      <Outlet />
    </div>
  )
}

export default Layout
