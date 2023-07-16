import React from 'react';
import { AddCircle } from '@mui/icons-material';

import logo from '../assets/logo.png';
import Navigation from './navigation';
import Shortcut from './Shortcut';
import arrows from '../assets/unfold_more.svg';
import rectangle from '../assets/Rectangle.svg';
import sponser from '../assets/cybertig.png';

const Sidebar = ({ profilepic }) => {
  return (
    <div className="bg-main text-white h-full p-3">
      <div className="grid grid-cols-1 gap-5">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* logo */}
          <img src={logo} alt="emission_logo" />
          <hr className="w-4/5 mx-auto" />
        </div>
        <div className="flex justify-between items-center bg-transbg p-2 rounded-lg">
          {/* pic */}
          <img className="w-10 h-10 rounded-3xl" src={profilepic} alt="" />
          <div className="flex flex-col gap-1">
            <h4 className="font-bold">Joney</h4>
            <h4 className="text-sm font-semibold text-gray-300">Project Manager</h4>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            <Navigation />
          </ul>
        </div>

        {/* bottom navs */}
        <div className="my-5">
          <h5 className="text-gray-300 text-sm my-3">Shortcuts</h5>
          <ul className="flex flex-col gap-2">
            <Shortcut />
          </ul>
        </div>
        {/* sponsors and logout */}
        <div className="grid grid-cols-3 items-center justify-start gap-2">
          <img className="shadow-black shadow-md w-10 h-10 rounded-3xl" src={profilepic} alt="" />
          <h4>Logout</h4>
          <img className="w-5 h-5 my-1" src={arrows} alt="" />
        </div>
        <div className="flex flex-col gap-3 my-2 justify-center items-center">
          <img src={rectangle} alt="" />
          <h4 className="text-center font-bold">Powered By</h4>
          <img className="w-80" src={sponser} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
