import React from 'react';
import TableComponent from '../components/Table';
import Header from '../components/header';
import { AddCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Facilities = ({ headLogo }) => {
  return (
    <div className="col-span-10 px-5">
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="font-bold text-3xl">Manage Facilities</h1>
          <Header headLogo={headLogo} />
        </div>

        <div className="bg-theme text-white p-5 flex items-center justify-between">
          <h2>Usage - CYBERTIG</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
          <button className="text-white flex gap-2 items-center bg-theme w-full md:w-auto p-3">
            <Link className="flex gap-2" to="/dashboard/AddFacility">
              <AddCircleRounded />
              <h1>Add Facility</h1>
            </Link>
          </button>
        </div>

        <TableComponent />
      </div>
    </div>
  );
};

export default Facilities;
