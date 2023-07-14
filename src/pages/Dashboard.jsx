import React, { useState } from 'react'
import Sidebar from '../components/sidebar'
import Settings from '../widgets/Settings'
import InputData from '../widgets/InputData'
import headLogo from '../assets/ChatGPT_logo.png'
import DataComments from '../widgets/DataComments'
import Facilities from '../widgets/Facilities'
import Organizations from '../widgets/Organizations'
import AddFacility from '../widgets/AddFacility'
import AddOrganizations from '../widgets/AddOrganizations'
import Help from '../widgets/Help'
import Overview from '../widgets/Overview'
import { Route, Routes } from 'react-router'


const Dashboard = ({profile}) => {
 
  return (
    <div className=" grid grid-cols-12 bg-contentbg" >
    <div className="col-span-2">
      <Sidebar  profilepic={profile} ></Sidebar>
    </div>
    <Routes>
      <Route path='/' element={<Overview headLogo={headLogo}></Overview>}></Route>
      <Route path='/Facility' element={<Facilities headLogo={headLogo}></Facilities>}></Route>
      <Route path='/organizations' element={<Organizations headLogo={headLogo}></Organizations>}></Route>
      <Route path='/input' element={<InputData headLogo={headLogo}></InputData>}></Route>
      <Route path='/help' element={<Help headLogo={headLogo}></Help>}></Route>
      <Route path='/data' element={<DataComments headLogo={headLogo}></DataComments>}></Route>
      <Route path='/settings' element={<Settings profile={profile} headLogo={headLogo}></Settings>}></Route>
      <Route path='/AddFacility' element={<AddFacility  headLogo={headLogo}></AddFacility>}></Route>
      <Route path='/AddOrganization' element={<AddOrganizations  headLogo={headLogo}></AddOrganizations>}></Route>
    </Routes>
       
  </div>
  )
}

export default Dashboard