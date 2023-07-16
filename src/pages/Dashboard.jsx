import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Settings from '../widgets/Settings';
import InputData from '../widgets/InputData';
import headLogo from '../assets/ChatGPT_logo.png';
import DataComments from '../widgets/DataComments';
import Facilities from '../widgets/Facilities';
import Organizations from '../widgets/Organizations';
import AddFacility from '../widgets/AddFacility';
import AddOrganizations from '../widgets/AddOrganizations';
import Help from '../widgets/Help';
import Overview from '../widgets/Overview';
import { Route, Routes } from 'react-router';
import Header from '../components/header';
import zIndex from '@mui/material/styles/zIndex';

const Dashboard = ({ profile }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  // Define a mapping of routes to their corresponding headings
  const routeHeadings = {
    '/dashboard/': 'Dashboard',
    '/dashboard/Facility': 'Manage Facilities',
    '/dashboard/organizations': 'Manage Organizations',
    '/dashboard/input': 'Input Data',
    '/dashboard/help': 'Help',
    '/dashboard/data': 'Data Page',
    '/dashboard/settings': 'Settings',
    '/dashboard/AddFacility': 'Add Facility',
    '/dashboard/AddOrganization': 'Add Organization',
  };

  // Get the current route's heading
  //absolute z-10 w-[50%]
  // const responsiveSidebar = {
  //   zIndex: '10',
  //   width: '50%',
  //   position:'absolute'
  // };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  const currentHeading = routeHeadings[location.pathname] || ' ';

  return (
    <div  className="grid grid-cols-12 bg-contentbg">
      {/* Add the responsive sidebar code here  */}
      <div   style={{ zIndex: showSidebar ? '10' : '' , width: showSidebar?'50%':'' , position : showSidebar?'absolute':"" }} 
      className={`col-span-1 md:col-span-2 lg:col-span-2 lg:block md:block  ${showSidebar ? 'block' : 'hidden'}  `}>
        <Sidebar profilepic={profile}></Sidebar>
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-10 px-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex md:flex-row items-center justify-between">
            <h1 className="font-bold text-3xl">{currentHeading}</h1>
            <Header toggleSidebar={toggleSidebar} headLogo={headLogo} />
          </div>
          <Routes>
            <Route path="/" element={<Overview headLogo={headLogo}></Overview>} />
            <Route path="/Facility" element={<Facilities headLogo={headLogo}></Facilities>} />
            <Route path="/organizations" element={<Organizations headLogo={headLogo}></Organizations>} />
            <Route path="/input" element={<InputData headLogo={headLogo}></InputData>} />
            <Route path="/help" element={<Help headLogo={headLogo}></Help>} />
            <Route path="/data" element={<DataComments headLogo={headLogo}></DataComments>} />
            <Route path="/settings" element={<Settings profile={profile} headLogo={headLogo}></Settings>} />
            <Route path="/AddFacility" element={<AddFacility headLogo={headLogo}></AddFacility>} />
            <Route path="/AddOrganization" element={<AddOrganizations headLogo={headLogo}></AddOrganizations>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
