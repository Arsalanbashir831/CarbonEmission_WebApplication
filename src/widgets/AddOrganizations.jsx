import React from 'react';
import Header from '../components/header';
import TextField from '@mui/material/TextField';

const AddOrganization = () => {
  return (
    <>
     

          <div className="bg-theme text-white p-5 flex items-center justify-between">
            <h2>Usage - CYBERTIG</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-purewhite">
            <TextField id="outlined-basic" label="Organization Name" variant="outlined" />
            <TextField id="outlined-basic" label="Reporting Year End" variant="outlined" />
            <TextField id="outlined-basic" label="Industry Sector" variant="outlined" />
            <TextField id="outlined-basic" label="Reporting Currency" variant="outlined" />
            <TextField id="outlined-basic" label="Account Type" variant="outlined" />
            <TextField id="outlined-basic" label="Revenue and Productivity Data" variant="outlined" />
            <div className="col-span-2">
              <h1 className="text-left font-bold py-4 ">Add Metric Details</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <TextField id="outlined-basic" label="Reporting Period" variant="outlined" />
                <TextField id="outlined-basic" label="Reporting Period" variant="outlined" />
                <TextField id="outlined-basic" label="FTE" variant="outlined" />
              </div>
            </div>
          </div>

          <button className="bg-theme w-full md:w-[50%] mx-auto text-white p-3">Add Organization</button>
       
    </>
  );
};

export default AddOrganization;
