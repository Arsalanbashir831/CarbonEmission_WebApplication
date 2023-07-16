import React from 'react';
import TableComponent from '../components/Table';
import Header from '../components/header';
import { AddCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Organizations = () => {
  return (
   <>
   
   <div className="bg-theme text-white p-5 flex items-center justify-between">
          <h2>Usage - CYBERTIG</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <button className="text-white flex gap-2 items-center bg-theme w-full md:w-[20%] p-3">
            <Link className="flex" to="/dashboard/AddOrganization">
              <AddCircleRounded />
              <h1>Add Organization</h1>
            </Link>
          </button>
        </div>
        <TableComponent />
   
   </>

       
     
  );
};

export default Organizations;
