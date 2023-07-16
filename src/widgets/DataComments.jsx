import React, { useState } from 'react';
import Header from '../components/header';
import { AddBoxRounded } from '@mui/icons-material';
import PieChart from '../components/PieChart';
import TextField from '@mui/material/TextField';

const DataComments = () => {
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

          {/* AI Comments */}
          <div className="bg-purewhite p-3 flex flex-col gap-4">
            <h1 className="text-xl font-bold">AI Comments</h1>
            <div>
              <TextField label="Comment" fullWidth />
            </div>
            <div>
              <textarea className="border border-gray-300 p-2 resize-none outline-blue-600 w-full" rows={6} />
            </div>
          </div>

          <div>
            <PieChart Addbtn={'false'}></PieChart>
          </div>
      
    </>
  );
};

export default DataComments;
