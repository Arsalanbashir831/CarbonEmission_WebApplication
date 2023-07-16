import React from 'react';
import TableComponent from '../components/Table';
import Header from '../components/header';
import { AddCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Facilities = () => {
  return (
  <>
   <div className="bg-theme text-white p-5 flex items-center justify-between">
          <h2>Usage - CYBERTIG</h2>
        </div>

        <div className="flex  md:flex-row gap-2 md:gap-0 items-center justify-between">
          <button className="text-white flex gap-2 items-center bg-theme w-full md:w-auto p-3">
            <Link className="flex gap-2" to="/dashboard/AddFacility">
              <AddCircleRounded />
              <h1>Add Facility</h1>
            </Link>
          </button>
        </div>

        <TableComponent />
  
  </>


  );
};

export default Facilities;
