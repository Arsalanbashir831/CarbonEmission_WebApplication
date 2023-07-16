import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Navigation from './navigation'
import Shortcut from './Shortcut'
import arrows from '../assets/unfold_more.svg'
import rectangle from '../assets/Rectangle.svg'
import sponser from '../assets/cybertig.png'


const sidebar = ({profilepic,navid}) => {

  return (
    <div className='bg-main text-white h-[100%] p-3' >
      <div className='grid grid-cols-1 gap-1'>
        <div className='grid grid-cols-1 justify-center items-center gap-3  '>
          {/* logo */}
          <img src={logo} alt="emission_logo" srcset="" />
          <hr className='w-[90%] m-auto' />
        </div>
        <div className='m-auto flex justify-start items-center gap-5 bg-transbg px-2 py-4 rounded-lg '>
          <div >
            {/* pic */}
            <img className='w-[40px] h-[40px] rounded-3xl' src={profilepic} alt="" />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='font-bold'>Joney</h4>
            <h4 className='text-sm font-semibold text-gray-300'>Project Manager</h4>
          </div>
        </div>
        <div>
          <ul className='flex flex-col gap-1'>
            <Navigation  ></Navigation>
          </ul>
        </div>

        
        {/* bottom navs */}
        <div className='my-5' >
          <h5 className='text-gray-300 text-sm my-3'>Shortcuts</h5>
          <ul className='flex flex-col gap-2' >
            <Shortcut ></Shortcut>
         </ul>
        </div>
        {/* sponsers and logout */}
        <div className='grid grid-cols-3 items-center justify-start gap-2'>
        <img className='shadow-black shadow-md  w-[40px] h-[40px] rounded-3xl' src={profilepic} alt="" />
        <h4>Logout</h4>
        <img className='w-[20px] h-[20px] my-1 ' src={arrows} alt="" />
        </div>
        <div className=' flex flex-col gap-3 my-2 justify-center items-center'>
         <img src={rectangle} alt="" srcset="" />
         <h4 className='text-center font-bold'>Powered By</h4>
         <img className='w-[80%]' src={sponser} alt="" />
        </div>

      </div>
    </div>
  )
}

export default sidebar