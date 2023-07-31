import React from 'react';
import Header from '../components/header';
import EmissionBox from '../components/EmissionBox';
import PieChart from '../components/PieChart';
import LeadershipBoard from '../components/LeadershipBoard';
import BarChart from '../components/BarChart';

const Overview = () => {
  return (
    <>
   
            <div className="flex flex-row md:flex-row items-center justify-center">
              <select className="  mr-2 mb-2 md:mb-0 px-2 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                <option unselectable='true' value="">Categories</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
              <select className="mr-2 mb-2 md:mb-0 px-2 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                <option unselectable='true' value="">Period</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
              <select className="px-2 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
                <option unselectable='true' value="">Date</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </div>
      
        
        <div className='flex flex-col  md:flex-row items-center justify-start gap-5 my-5 '>
          <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
          <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
          <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
          <EmissionBox headtxt={'Emissions for the period'} bottomtxt={'27 tCO2e'}></EmissionBox>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-start items-center my-5 gap-10'>
          <PieChart></PieChart>
          <BarChart></BarChart>
        </div>

        {/* leadership board  */}
        <div className='w-full'>
          <LeadershipBoard></LeadershipBoard>
        </div>
    
    </>
  );
};

export default Overview;
