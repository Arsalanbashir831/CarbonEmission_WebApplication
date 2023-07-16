import React, { useState } from 'react';
import Header from '../components/header';
import { AddBoxRounded } from '@mui/icons-material';
import PieChart from '../components/PieChart';

const InputData = () => {
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

          <div>
            <PieChart Addbtn={'true'}></PieChart>
          </div>

          <div></div>
    </>
  );
};

export default InputData;
