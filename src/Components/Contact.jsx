import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Contact() {
    const {name} = useParams()


    const navigate = useNavigate()
    function handleNav(){
        navigate('/')
    }

  return (
    <div>
        <h1 className='text-2xl font-bold'>This is Contact Page</h1>
        <h2 className='text-lg font-semibold'>Hello {name}</h2>
        <button onClick={handleNav} className='border-2 border-gray-800 rounded-xl p-1 m-2 hover:bg-gray-800 hover:text-white'>Home Page</button>
    </div>
  )
}

export default Contact