import React from 'react'
import Header from '../components/header'
import TextField from '@mui/material/TextField';


const AddFacility = ({headLogo}) => {
    return (
  <>
            <div className="col-span-10 px-5">
                <div className="grid grid-cols-1 gap-5">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-3xl">Add Organizations</h1>
                        <Header headLogo={headLogo} />
                    </div>

                    <div className="bg-theme text-white p-5 flex items-center justify-between">
                        <h2>Usage - CYBERTIG</h2>
                    </div>
                    <div className='grid grid-cols-2 gap-5 p-5  bg-purewhite text-center'>
                    <TextField id="outlined-basic" label="Organization Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Reporting Year End" variant="outlined" />
                    <TextField id="outlined-basic" label="Industty Sector" variant="outlined" />
                    <TextField id="outlined-basic" label="Reporting Currency" variant="outlined" />
                    <TextField id="outlined-basic" label="Account Type" variant="outlined" />
                    <TextField id="outlined-basic" label="Revenue and Productivity Data" variant="outlined" />
                    <h1 className='text-left font-bold'>Add Metric Details</h1>
                    <div className='grid grid-cols-3 col-span-2 gap-5'>
                    <TextField id="outlined-basic" label="Reporting Period" variant="outlined" />
                    <TextField id="outlined-basic" label="Reporting Period" variant="outlined" />
                    <TextField id="outlined-basic" label="FTE" variant="outlined" />
                    </div>
                    <button className='bg-theme col-span-2 w-[50%] m-auto text-white p-3'>Add Organization </button>
                    </div>
                   
                </div>
                
                </div>


            </>
            )
}

            export default AddFacility