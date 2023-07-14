import React, { useState } from 'react'
import Header from '../components/header'
import { AddBoxRounded } from '@mui/icons-material';
import PieChart from '../components/PieChart';



const InputData = ({ headLogo }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    return (
        <>
            <div className="col-span-10 px-5">
                <div className="grid grid-cols-1 gap-5">
                    <div className='flex items-center justify-between'>
                        <h1 className='font-bold text-3xl'>Input Data</h1>
                        <Header headLogo={headLogo}></Header>
                    </div>

                    <div className='bg-theme text-white p-5 flex items-center justify-between'>
                        <h2>Usage - CYBERTIG</h2>
                        <input
                            type="file"
                            id="file-input"
                            accept=".xlsx, .xls"
                            onChange={handleFileChange}
                            className="sr-only"
                        />
                        <label htmlFor="file-input" className="flex items-center cursor-pointer">
                            <AddBoxRounded></AddBoxRounded>
                            Upload Excel File
                        </label>
                        {selectedFile && (
                         <>
                         <p className="text-sm">{selectedFile.name}</p>
                        <button className=' text-white  border-blue-100'>Submit</button>
                         </>
                            
                        )}
                    </div>

              <div>
                 <PieChart Addbtn={'true'}></PieChart>
              </div>
                    <div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default InputData