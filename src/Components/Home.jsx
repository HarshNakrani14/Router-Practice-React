import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
    function handleNav(){
        navigate('/contact/Harsh')
    }
  return (
    <div>
        <h1 className='text-2xl font-bold'>This is Home page</h1>
        <span className='text-red-600 text-sm font-semibold'>**You can not go Direct contact Page with Navbar Use Below button.</span><br />
        <button onClick={handleNav} className='border-2 border-gray-800 rounded-xl p-1 m-2 hover:bg-gray-800 hover:text-white'>Contact Page</button>
    </div>
  )
}

export default Home