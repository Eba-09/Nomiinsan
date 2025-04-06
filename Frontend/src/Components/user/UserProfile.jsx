import React,{useState, useEffect} from "react"
import { CircleUser } from 'lucide-react';
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useNavigate } from "react-router-dom";
function getUserInfo () {
const [userData, setuserData] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
    useEffect(() => {
      if (user) {
        axios
          .get(`http://localhost:8000/api/lib/user/${user}`)
          .then((res) => {
            console.log(res.data.user);
            setuserData(res.data.user);
          })
          .catch((e) => {
            console.error(e); 
          });
      }
    }, [user]);
  return(
      <div className="min-h-full bg-gray-100 text-gray-900 p-1 flex justify-end">
      <div className="w-full text-sm md:w-30 sm:w-45 lg:w-50 lg:text-2xl max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col items-center pb-1 pt-1">
      <CircleUser />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {userData ? ` ${userData.Lname}` : 'Loading...'}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {userData ? userData.oyutniCode : 'Loading...'}
        </span>
      </div>
    </div>
    </div>
  )
};
export default getUserInfo;
