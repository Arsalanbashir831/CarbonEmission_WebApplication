import React, { useState, useEffect } from 'react';
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
import ManageDataFacilities from '../widgets/ManageDataFacilities';
import Emission from '../components/Emission';
import Talk from '../widgets/Talk';
import Goals from '../widgets/Goals';
import Sponsers from '../widgets/Sponsers';
import db from '../context/db';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

const Dashboard = ({ profile }) => {

  const [info, setInfo] = useState({});
 
    // Start the fetch operation as soon as
    // the page loads
 
    // Fetch the required data using the get() method
    const Fetchdata = async () => {
      
      const userRef = await collection(db, "User");

      const q = await query(userRef, where("email", "==", localStorage.getItem("email")));
      console.log(q)
      

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());

          setInfo(doc.data())
      });
    }

    useEffect(()=>{
      console.log("meow")
      Fetchdata();
    },[])

  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  // Define a mapping of routes to their corresponding headings
  const routeHeadings = {
    '/dashboard/': 'Dashboard',
    '/dashboard': 'Dashboard',
    '/dashboard/Facility': 'Manage Facilities',
    '/dashboard/organizations': 'Manage Organizations',
    '/dashboard/input': 'Input Data',
    '/dashboard/help': 'Help',
    '/dashboard/data': 'Data Page',
    '/dashboard/settings': 'Settings',
    '/dashboard/AddFacility': 'Add Facility',
    '/dashboard/AddOrganization': 'Add Organization',
    '/dashboard/datafacilities': 'Manage Data Facilities',
    '/dashboard/myemission': 'My Emission',
    '/dashboard/Talk': 'Talk',
    '/dashboard/Goals': 'Goals',
    '/dashboard/Sponsers': 'Sponsers',

  };


  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  
  const currentHeading = routeHeadings[location.pathname] || ' ';

  return (
    
    <div  className="grid grid-cols-12 bg-contentbg">
      {console.log(info)}
      {/* Add the responsive sidebar code here  */}
      <div   style={{ zIndex: showSidebar ? '10' : '' , width: showSidebar?'50%':'' , position : showSidebar?'absolute':"" }} 
      className={`col-span-1 md:col-span-2 lg:col-span-2 lg:block md:block  ${showSidebar ? 'block' : 'hidden'}  `}>
        <Sidebar username = {info.username} profession = {info.profession} profilepic={info.picture}></Sidebar>
      </div>
      <div className="col-span-12 md:col-span-10 lg:col-span-10 px-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex md:flex-row items-center justify-between">
            <h1 className="font-bold text-3xl">{currentHeading}</h1>
            <Header toggleSidebar={toggleSidebar} headLogo={headLogo} />
          </div>
          <Routes>
            <Route path="/" element={<Overview></Overview>} />
            <Route path="/Facility" element={<Facilities></Facilities>} />
            <Route path="/organizations" element={<Organizations></Organizations>} />
            <Route path="/input" element={<InputData></InputData>} />
            <Route path="/help" element={<Help ></Help>} />
            <Route path="/data" element={<DataComments ></DataComments>} />
            <Route path="/settings" element={<Settings profile={profile} ></Settings>} />
            <Route path="/AddFacility" element={<AddFacility ></AddFacility>} />
            <Route path="/AddOrganization" element={<AddOrganizations ></AddOrganizations>} />
            <Route path="/datafacilities" element={<ManageDataFacilities></ManageDataFacilities>} />
            <Route path="/myemission" element={<Emission></Emission>} />
            <Route path="/Talk" element={<Talk></Talk>} />
            <Route path="/Goals" element={<Goals></Goals>} />
            <Route path="/Sponsers" element={<Sponsers></Sponsers>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
