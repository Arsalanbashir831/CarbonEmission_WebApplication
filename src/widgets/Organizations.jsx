import {React,useState,useEffect} from 'react';
import TableComponent from '../components/Table';
import Header from '../components/header';
import { AddCircleRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';

const columns = ['OragnizationName', 'IndustrySector', 'Fte', 'AccountType'];

const jsonData = [
  {
    'Organization Name': 'Data 1',
    'Organization Type': 'Data 2',
    'Primary Organization': 'Data 3',
    'Postcode/Zip': 'Data 4',
    'External Id': 'Data 5',
  },
  
];

const Organizations = () => {
  const firebase = useFirebase()
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const organizationData = await firebase.fetchOrganizationData(localStorage.getItem('email'));
        setOrganizations(organizationData);
      } catch (error) {
        console.error("Error fetching Facility data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
   <>
   
   <div className="bg-theme text-white p-5 flex items-center justify-between">
          <h2>Usage - CYBERTIG</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <button className="text-white flex gap-2 items-center bg-theme w-full md:w-[20%] p-3">
            <Link className="flex" to="/dashboard/AddOrganization">
              <AddCircleRounded />
              <h1>Add Organization</h1>
            </Link>
          </button>
        </div>
        <TableComponent columns={columns} data={organizations} />
   
   </>

       
     
  );
};

export default Organizations;
