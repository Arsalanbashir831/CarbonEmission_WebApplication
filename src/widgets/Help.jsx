import React from 'react';
import Header from '../components/header';
import Contact from '../components/contact';
import Feedback from '../components/Feedback';
import Tutorial from '../components/Tutorial';
import Accordian from '../components/Accordian';

const Help = ({ headLogo }) => {
  return (
    <>
      <div className="col-span-10 px-5">
        <div className="grid grid-cols-1">
        <div className="flex items-center justify-between">
            <h1 className="font-bold text-3xl">Help</h1>
            <Header headLogo={headLogo} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-5 my-5">
            <div className="bg-purewhite text-left px-5">
              <Tutorial></Tutorial>
            </div>
            <div className="bg-purewhite text-left px-5">
              <Contact></Contact>
            </div>
            <div className="bg-purewhite text-left px-5">
              <Feedback></Feedback>
            </div>
          </div>
        </div>
        <div className="my-5 bg-purewhite">
          <Accordian></Accordian>
        </div>
      </div>
    </>
  );
};

export default Help;
