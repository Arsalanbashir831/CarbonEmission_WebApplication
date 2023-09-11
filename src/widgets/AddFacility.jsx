import React from 'react';
import Header from '../components/header';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useFirebase } from "../context/Firebase";

// Create a custom hook for handling form input
function useFormInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return [value, handleChange];
}

const AddFacility = () => {
  const firebase = useFirebase()
  // Use custom hook for each input field
  const [facultyName, setFacultyName] = useFormInput('');
  const [postcode, setPostcode] = useFormInput('');
  const [facultyType, setFacultyType] = useFormInput('');
  const [primaryFaculty, setPrimaryFaculty] = useFormInput('');

  const handleSubmit =  (event) => {
    event.preventDefault();
     firebase.AddFacility(facultyName,postcode,facultyType,primaryFaculty,localStorage.getItem('email'))

    // You can perform any further actions, such as sending data to an API, here
  };

  return (
    <>
      <div className="bg-theme text-white p-5 flex items-center justify-between">
        <h2>Usage - CYBERTIG</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 bg-purewhite">
        <TextField
          id="outlined-basic"
          label="Faculty Name"
          variant="outlined"
          value={facultyName}
          onChange={setFacultyName}
        />
        <TextField
          id="outlined-basic"
          label="Postcode/ZIP"
          variant="outlined"
          value={postcode}
          onChange={setPostcode}
        />
        <TextField
          id="outlined-basic"
          label="Faculty Type"
          variant="outlined"
          select
          fullWidth
          value={facultyType}
          onChange={setFacultyType}
        >
          <MenuItem value="Facility1">Facility 1</MenuItem>
          <MenuItem value="Facility2">Facility 2</MenuItem>
          <MenuItem value="Facility3">Facility 3</MenuItem>
          {/* Add more options as needed */}
        </TextField>
        <TextField
          id="outlined-basic"
          label="Primary Faculty"
          variant="outlined"
          value={primaryFaculty}
          onChange={setPrimaryFaculty}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <button className="bg-theme w-full md:w-[50%] mx-auto text-white p-3">
          Add Facility
        </button>
      </form>
    </>
  );
};

export default AddFacility;
