import React, { useState } from 'react';
import Header from '../components/header';
import { AddBoxRounded, AddCircleOutline, CloseSharp } from '@mui/icons-material';
import PieChart from '../components/PieChart';

const AddForm = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-70 ">
      <form className="bg-white p-8 rounded-lg shadow-lg w-80 bg-purewhite">
        <div className='flex justify-between items-center'>
          <h2 className="text-2xl font-bold mb-4">Add Input</h2>
          <h1 onClick={onClose} className='text-red-500 cursor-pointer'> <CloseSharp ></CloseSharp> </h1>
        </div>
        {/* Input 1 */}
        <div className="mb-4">
          <label htmlFor="scope" className="block font-semibold text-gray-800 mb-1">
            Select Scope
          </label>
          <select
            id="scope"
            name="scope"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="Scope 1">Scope 1</option>
            <option value="Scope 2">Scope 2</option>
            <option value="Scope 3">Scope 3</option>
          
          </select>
        </div>


        {/* Input 2 */}
        <div className="mb-4">
          <label htmlFor="input2" className="block font-semibold text-gray-800 mb-1">
            Type of Fuel
          </label>
          <input
            type="text"
            id="typeOfFuel"
            name='typeOfFuel'
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        {/* Input 3 */}
        <div className="mb-6">
          <label htmlFor="input3" className="block font-semibold text-gray-800 mb-1">
            Enter Unit
          </label>
          <input
            type="text"
            name='unit'
            id="unit"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        {/* Input 4 */}
        <div className="mb-6">
          <label htmlFor="input3" className="block font-semibold text-gray-800 mb-1">
            Enter Value
          </label>
          <input
            name='value'
            type="text"
            id="value"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div className='bg-theme text-white text-center p-2 my-5 cursor-pointer'>
            <input className='cursor-pointer' type="submit" value="Submit" />
          </div>
        </div>

        {/* Close button */}
        {/* <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400"
          >
            Close
          </button>
        </div> */}
      </form>
    </div>
  );
};


const InputData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
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
      <div className='bg-purewhite p-4'>
        <PieChart ></PieChart>
        <div className="btn bg-theme p-2 text-white flex justify-start items-center gap-4 w-32 cursor-pointer" onClick={handleAddClick}>
          <AddCircleOutline />
          Add
        </div>
      </div>


      {showAddForm && <AddForm onClose={handleCloseAddForm} />}
    </>
  );
};

export default InputData;
