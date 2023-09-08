import React from 'react';
import TableComponent from '../components/Table';
import Header from '../components/header';
import { AddCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const columns = ['Faculty Name', 'Faculty Type', 'Primary Faculty', 'Postcode/Zip', 'External Id'];

const jsonData = [
  {
    'Faculty Name': 'Data 1',
    'Faculty Type': 'Data 2',
    'Primary Faculty': 'Data 3',
    'Postcode/Zip': 'Data 4',
    'External Id': 'Data 5',
  },
  
];


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

        <TableComponent columns={columns} data={jsonData} />
  
  </>


  );
};

export default Facilities;
