import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='container-fluid mt-5 p-3'>
        <Outlet/>
    </div>
  )
}

export default Dashboard