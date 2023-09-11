import React, { useState } from 'react';
import Header from '../components/header';
import TextField from '@mui/material/TextField';
import { useFirebase } from '../context/Firebase';

const AddOrganization = () => {
  const firebase = useFirebase();
  // Step 1: Define a single state object for all input values
  const [organizationData, setOrganizationData] = useState({
    orgName: '',
    reportingYearEnd: '',
    industrySector: '',
    reportingCurrency: '',
    accountType: '',
    revenueAndProductivity: '',
    reportingPeriod1: '',
    reportingPeriod2: '',
    fte: '',
  });

  // Step 2: Event handler function to update the state object
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrganizationData({
      ...organizationData,
      [name]: value,
    });
  };

  // Step 3: Event handler function for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // You can access the input values from the state object here
    console.log('Organization Data:', organizationData);
firebase.AddOrganization(
  organizationData.orgName,organizationData.reportingYearEnd,
  organizationData.industrySector,
  organizationData.reportingCurrency,
  organizationData.accountType,organizationData.revenueAndProductivity,
  organizationData.reportingPeriod1,organizationData.reportingPeriod2,
  organizationData.fte,localStorage.getItem('email'))
    // You can perform any further actions, such as sending data to an API, here
  };

  return (
    <>
      <div className="bg-theme text-white p-5 flex items-center justify-between">
        <h2>Usage - CYBERTIG</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-purewhite">
        <TextField
          id="orgName"
          name="orgName"
          label="Organization Name"
          variant="outlined"
          value={organizationData.orgName}
          onChange={handleInputChange}
        />
        <TextField
          id="reportingYearEnd"
          name="reportingYearEnd"
          label="Reporting Year End"
          variant="outlined"
          value={organizationData.reportingYearEnd}
          onChange={handleInputChange}
        />
        <TextField
          id="industrySector"
          name="industrySector"
          label="Industry Sector"
          variant="outlined"
          value={organizationData.industrySector}
          onChange={handleInputChange}
        />
        <TextField
          id="reportingCurrency"
          name="reportingCurrency"
          label="Reporting Currency"
          variant="outlined"
          value={organizationData.reportingCurrency}
          onChange={handleInputChange}
        />
        <TextField
          id="accountType"
          name="accountType"
          label="Account Type"
          variant="outlined"
          value={organizationData.accountType}
          onChange={handleInputChange}
        />
        <TextField
          id="revenueAndProductivity"
          name="revenueAndProductivity"
          label="Revenue and Productivity Data"
          variant="outlined"
          value={organizationData.revenueAndProductivity}
          onChange={handleInputChange}
        />
        <div className="col-span-2">
          <h1 className="text-left font-bold py-4 ">Add Metric Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TextField
              id="reportingPeriod1"
              name="reportingPeriod1"
              label="Reporting Period"
              variant="outlined"
              value={organizationData.reportingPeriod1}
              onChange={handleInputChange}
            />
            <TextField
              id="reportingPeriod2"
              name="reportingPeriod2"
              label="Reporting Period"
              variant="outlined"
              value={organizationData.reportingPeriod2}
              onChange={handleInputChange}
            />
            <TextField
              id="fte"
              name="fte"
              label="FTE"
              variant="outlined"
              value={organizationData.fte}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      {/* Button to submit */}
      <button
        onClick={handleSubmit}
        className="bg-theme w-full md:w-[50%] mx-auto text-white p-3"
      >
        Add Organization
      </button>
    </>
  );
};

export default AddOrganization;
