import React, { useState } from 'react';

import Contact from '../components/contact';
import EditForm from '../components/EditForm';
import Header from '../components/header'

const Settings = ({ profile , headLogo}) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleUpdateProfile = () => {
    setShowEditForm(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('contentWindow')) {
      setShowEditForm(false);
    }
  };
  return (
    <>
      {showEditForm && <EditForm name={'Jonney'} position={"Professional Designer"} email={"abc@gmai.com"} password={"abc"} picture={profile} />}
      <div onClick={handleOutsideClick} className="col-span-10 px-5  contentWindow">
          <div className="grid grid-cols-1">
          <Header headLogo={headLogo}></Header>
            <div className="grid grid-cols-12 text-center">
              <div className=""></div>
              <div className="bg-purewhite col-span-4">
                <div className="text-left p-5 flex flex-col justify-start items-start gap-3">
                  <h3 className="text-left font-bold">My Account</h3>
                  <img className="w-[80px] h-[80px] rounded-full" src={profile} alt="" />
                  <div>
                    <p className="text-left">Jonney</p>
                    <p>Professional Designer</p>
                  </div>
                </div>
                <div className="text-right p-4">
                  <button className="bg-main text-white p-2 rounded-sm"  onClick={handleUpdateProfile}>
                    Update Profile
                  </button>
                </div>
              </div>
              <div className=""></div>
              <div className="col-span-5 bg-purewhite text-left px-5">
                <Contact></Contact>
              </div>
            </div>
          </div>
          </div>
    </>
  );
};

export default Settings;
