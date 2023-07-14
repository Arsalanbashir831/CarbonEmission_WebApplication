import React from 'react'
import Header from '../components/header'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const AddFacility = ({ headLogo }) => {
    return (
        <>
            <div className="col-span-10 px-5">
                <div className="grid grid-cols-1 gap-5">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-3xl">Add Facility</h1>
                        <Header headLogo={headLogo} />
                    </div>

                    <div className="bg-theme text-white p-5 flex items-center justify-between">
                        <h2>Usage - CYBERTIG</h2>
                    </div>
                    <div className='grid grid-cols-2 gap-5 p-5  bg-purewhite text-center'>
                        <TextField id="outlined-basic" label="Faculty Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Postcode/ZIP" variant="outlined" />
                        <TextField
                            id="outlined-basic"
                            label="Faculty Type"
                            variant="outlined"
                            select
                            fullWidth
                        >
                            <MenuItem value="sector1">Sector 1</MenuItem>
                            <MenuItem value="sector2">Sector 2</MenuItem>
                            <MenuItem value="sector3">Sector 3</MenuItem>
                            {/* Add more options as needed */}
                        </TextField>
                        <TextField id="outlined-basic" label="Primary Faculty" variant="outlined" />
                    </div>
                   
                    <button className='bg-theme  w-[50%] m-auto text-white p-3'>Add Facility </button>
                </div>
                
            </div>


        </>
    )
}

export default AddFacility