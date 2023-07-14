import React, { useState } from 'react';
import Header from '../components/header';
import { AddBoxRounded } from '@mui/icons-material';
import PieChart from '../components/PieChart';
import TextField from '@mui/material/TextField';

const DataComments = ({ headLogo }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <>
      <div className="col-span-10 px-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl">Data Page</h1>
            <Header headLogo={headLogo} />
          </div>

          <div className="bg-theme text-white p-5 flex items-center justify-between">
            <h2>Usage - CYBERTIG</h2>
            <input
              type="file"
              id="file-input"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="sr-only"
            />
            <label htmlFor="file-input" className="flex items-center cursor-pointer">
              <AddBoxRounded />
              Upload Excel File
            </label>
            {selectedFile && (
              <>
                <p className="text-sm">{selectedFile.name}</p>
                <button className="text-white border-blue-100">Submit</button>
              </>
            )}
          </div>
          {/* AI Comments */}
          <div className="bg-purewhite p-3 flex flex-col gap-4">
            <h1>AI Comments</h1>
            <div>
              <TextField />
            </div>
            <div>
              <textarea className="border border-gray-300 p-2 resize-none outline-blue-600" rows={6} cols={125}  />
            </div>
          </div>
          <div>
            <PieChart Addbtn={'false'}></PieChart>
          </div>
        </div>
      </div>
    </>
  );    
};

export default DataComments;
