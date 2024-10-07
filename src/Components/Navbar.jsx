import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gray-600 text-white p-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Router Practice</h1>
        <ul className='font-semibold text-lg flex gap-10'>
        <li><NavLink to="/" className={({isActive})=>isActive?"bg-green-500 rounded-lg p-2 text-center":""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=>isActive?"bg-green-500 rounded-lg p-2 text-center":""}>About</NavLink></li>
        <li><NavLink to="/contact" className={({isActive})=>isActive?"bg-green-500 rounded-lg p-2 text-center":""}>Contact</NavLink></li>
           
        </ul>
    </nav>
  )
}

export default Navbar