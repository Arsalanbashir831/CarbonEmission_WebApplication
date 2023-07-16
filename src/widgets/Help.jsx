import React from 'react';
import Header from '../components/header';
import Contact from '../components/contact';
import Feedback from '../components/Feedback';
import Tutorial from '../components/Tutorial';
import Accordian from '../components/Accordian';

const Help = () => {
  return (
    <>
     

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
        <div className="my-5 bg-purewhite">
          <Accordian></Accordian>
        </div>
     
    </>
  );
};

export default Help;
