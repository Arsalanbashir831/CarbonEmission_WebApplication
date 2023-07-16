import React, { useState } from 'react';
import Contact from '../components/contact';
import EditForm from '../components/EditForm';
import Header from '../components/header';

const Settings = ({ profile, headLogo }) => {
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
      {showEditForm && <EditForm name={'Jonney'} position={'Professional Designer'} email={'abc@gmai.com'} password={'abc'} picture={profile} />}
      <div onClick={handleOutsideClick} className="col-span-10 px-5 contentWindow ">
        <Header headLogo={headLogo} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center">
          <div className="lg:col-span-1 bg-purewhite p-5">
            <div className="text-left flex flex-col justify-start items-center gap-9">
              <h3 className="text-left font-bold">My Account</h3>
              <img className="w-[80px] h-[80px] rounded-full mx-auto" src={profile} alt="" />
              <div>
                <p className="text-center font-bold text-2xl">Jonney</p>
                <p className="text-center">Professional Designer</p>
              </div>
            </div>
            <div className="text-center py-4">
              <button className="bg-main text-white px-4 py-2 rounded-full" onClick={handleUpdateProfile}>
                Update Profile
              </button>
            </div>
          </div>
          <div className="lg:col-span-1 bg-purewhite p-5">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
