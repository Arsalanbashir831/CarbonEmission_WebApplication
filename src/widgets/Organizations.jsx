import React from 'react'
import TableComponent from '../components/Table'
import Header from '../components/header'
import { AddCircleRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Organizations = ({headLogo}) => {
  return (
    <div className='col-span-10 px-5'>
          <div className="grid grid-cols-1 gap-5">
                    <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-3xl'>Manage Organizations</h1>
                        <Header headLogo={headLogo}></Header>
                    </div>
                    
          <div className="bg-theme text-white p-5 flex items-center justify-between">
            <h2>Usage - CYBERTIG</h2>
          </div>
       
          <button className='text-white  flex gap-2  items-center bg-theme w-[20%] p-3'>
           <Link className='flex' to='/dashboard/AddOrganization'>
           <AddCircleRounded></AddCircleRounded>
            <h1>Add Organization</h1>
           </Link>
          </button>
         
         
        <TableComponent></TableComponent>
        </div>
    </div>
  )
}

export default Organizations