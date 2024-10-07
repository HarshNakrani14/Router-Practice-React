import React from 'react'

function PageNotFound() {
  return (
    <div>
        <div className='h-screen w-screen bg-slate-400 flex justify-center items-center flex-col gap-8'>
            <h1 className='text-4xl font-serif font-bold'>404</h1>
            <h1 className='text-4xl font-serif font-bold'>Invalid Url, Please refresh Page.</h1>
        </div>
    </div>
  )
}

export default PageNotFound