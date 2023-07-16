import React from 'react'

const EmissionBox = ({headtxt , bottomtxt}) => {
  return (
    <div className='bg-purewhite px-8 py-4 shadow-md w-full'>
        <h1 className='text-gray-400'>{headtxt}</h1>
        <h1 className='text-2xl font-bold border-x-slate-500 '>{bottomtxt}</h1>
    </div>
  )
}

export default EmissionBox