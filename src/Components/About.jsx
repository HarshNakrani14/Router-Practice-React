import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1 className='text-2xl font-bold'>This is About Page</h1>
        <h2><NavLink to="address" className={({isActive})=>isActive?"bg-green-400":""}>Address</NavLink></h2>
        <Outlet />
    </div>
  )
}

export default About