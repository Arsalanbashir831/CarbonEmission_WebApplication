import { AddBoxRounded} from '@mui/icons-material'
import React from 'react'
import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DonutChart from '../components/DonutChart';
import AddBoxIcon from '@mui/icons-material/AddBox';

const ManageDataFacilities = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
      };
  return (
    <>

    <div className="bg-theme text-white p-5 flex flex-col md:flex-row items-center justify-between">
            <h2>Usage - CYBERTIG</h2>
            <label
              htmlFor="file-input"
              className="flex items-center cursor-pointer mt-3 md:mt-0"
            >
              <AddBoxRounded />
              
              <span className="ml-2">Upload Excel File</span>
              <input
                type="file"
                id="file-input"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>
            {selectedFile && (
              <div className="flex flex-col items-center mt-3 md:mt-0">
                <p className="text-sm">{selectedFile.name}</p>
                <button className="text-white bg-blue-500 px-4 py-2 rounded-md mt-2 md:mt-0">
                  Submit
                </button>
              </div>
            )}
          </div>
          <div className='bg-purewhite px-4'>
          <select
        className="my-4  block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="selectBox"
      >``
        <option value="">Select Faculty</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          <select
        className=" my-4 block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="selectBox"
      >``
        <option value="">Select Data Range</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          <select
        className="my-4 block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="selectBox"
      >``
        <option value="">Select Usage Type</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          <select
        className="my-4 block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="selectBox"
      >``
        <option value="">Category 1</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
          <select
        className="my-4 block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="selectBox"
      >``
        <option value="">Category 2</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <div className='flex justify-start items-center gap-5 my-3'>
        <button className='hover:bg-theme hover:text-white p-2 rounded-sm  text-purple-800 bg-graybg'>
          <div className='flex items-center gap-2 '>
          <AddBoxIcon ></AddBoxIcon> <span>Add</span>
          </div>
          </button>
        <button className='hover:bg-theme hover:text-white p-2 rounded-sm  text-purple-800 bg-graybg'>
           <div className='flex gap-2 '>
           <EditIcon></EditIcon>
           <span>Edit</span>
           </div>
           </button>
        <button className='hover:bg-theme hover:text-white p-2 rounded-sm  text-purple-800 bg-graybg'>
           <div className='flex gap-2'>
           <DeleteIcon></DeleteIcon>
            <span>Delete</span>
           </div>
           </button>
      </div>
          </div>

          <div className='grid grid-cols-2 bg-purewhite'>
            <DonutChart></DonutChart>
            <div></div>
          </div>
          </>
  )
}

export default ManageDataFacilities