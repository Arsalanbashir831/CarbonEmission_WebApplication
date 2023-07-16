import React from 'react';
import Header from '../components/header';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const AddFacility = () => {
  return (
    <>
     
          <div className="bg-theme text-white p-5 flex items-center justify-between">
            <h2>Usage - CYBERTIG</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-purewhite">
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

          <button className="bg-theme w-full md:w-[50%] mx-auto text-white p-3">Add Facility</button>
       
    </>
  );
};

export default AddFacility;
