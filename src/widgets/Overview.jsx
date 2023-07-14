import React from 'react';
import Header from '../components/header';
import EmissionBox from '../components/EmissionBox';
import PieChart from '../components/PieChart';
import LeadershipBoard from '../components/LeadershipBoard';
import BarChart from '../components/BarChart';

const Overview = ({ headLogo }) => {
  return (
    <>
      <div className="col-span-10 px-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <div className="flex items-center justify-center">
              <select className="mr-2 px-2 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                <option disabled value="">Categories</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
              <select className="mr-2 px-2 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                <option disabled value="">Period</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
              <select className="px-2 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                <option disabled value="">Date</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </div>
            <Header headLogo={headLogo} />
          </div>
        </div>
        <div className='flex items-center justify-start gap-5'>
        <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
        <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
        <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
        <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
        </div>
        <div className='grid grid-cols-2 justify-start items-center my-5 gap-10 '>
            <PieChart  Addbtn={'false'}></PieChart>
          
            {/* <PieChart Addbtn={'false'}></PieChart> */}
            <BarChart></BarChart>
        </div>

        {/* leadership board  */}
        <div className='w-[100%]'>
            <LeadershipBoard></LeadershipBoard>

        </div>
      
      </div>
    </>
  );
};

export default Overview;
