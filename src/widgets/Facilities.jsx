import {React,useState,useEffect} from 'react';
import TableComponent from '../components/Table';

import { AddCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const columns = ['FacultyName', 'FacultyType', 'PFaculty', 'PostalCode'];
const Facilities = () => {
  const firebase = useFirebase()
  const [facilities, setFacilities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const facilityData = await firebase.fetchFacilityData(localStorage.getItem('email'));
        setFacilities(facilityData);
      } catch (error) {
        console.error("Error fetching Facility data:", error.message);
      }
    };

    fetchData();
  }, []);

  console.log(facilities);
  return (
  <>
   <div className="bg-theme text-white p-5 flex items-center justify-between">
          <h2>Usage - CYBERTIG</h2>
        </div>

        <div className="flex  md:flex-row gap-2 md:gap-0 items-center justify-between">
          <button className="text-white flex gap-2 items-center bg-theme w-full md:w-auto p-3">
            <Link className="flex gap-2" to="/dashboard/AddFacility">
              <AddCircleRounded />
              <h1>Add Facility</h1>
            </Link>
          </button>
        </div>

        <TableComponent columns={columns} data={facilities} />
  
  </>


  );
};

export default Facilities;
