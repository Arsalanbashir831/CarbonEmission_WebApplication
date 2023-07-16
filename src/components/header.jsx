import React from 'react'
import { MenuOutlined } from '@mui/icons-material';

const header = ({headLogo}) => {
  return (
    <div className="flex items-center justify-end m-3 gap-2">
       <h2 className='block bg-theme p-2 text-white cursor-pointer  md:hidden lg:hidden'>
                <MenuOutlined></MenuOutlined>
              </h2>
              <img className=" hidden md:block lg:block w-[40px]" src={headLogo} alt="" />
            </div>
  )
}

export default header