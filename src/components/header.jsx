import React from 'react'
import { MenuOutlined } from '@mui/icons-material';

const header = ({headLogo,toggleSidebar}) => {
 
  return (
    <div className="flex items-center justify-end m-3 gap-2">
      {/* onclicking h2 responsive sidebar will add in the styles */}
       <h2  className='block bg-theme p-2 text-white cursor-pointer  md:hidden lg:hidden' onClick={toggleSidebar}>
                <MenuOutlined></MenuOutlined>
              </h2>
              <img className=" hidden md:block lg:block w-[40px]" src={headLogo} alt="" />
            </div>  
  )
}

export default header