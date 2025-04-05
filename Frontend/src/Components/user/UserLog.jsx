import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faLock } from '@fortawesome/free-solid-svg-icons'
const UserLogin = () => {
    const [oyutniCode, setoyutniCode] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const logSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/lib/user/login', {oyutniCode, password})
        .then(result => {
          console.log(result)
          if (result.data.success) {
            alert("Амжилттай нэвтэрлээ");
            navigate('/sanchHome');
          }
        })
        .catch(err => console.log(err))
    };
  return (
    
    <motion.div 
    initial={{opacity: 0, x: -60}}
    animate={{opacity: 1, x: 0}}
    transition={{duration: 0.6}}
    className='w-full flex flex-col justify-center items-center mt-24 font-sans'>
      <div className="bg-blue-100 shadow-md w-11/12 max-w-sm sm:w-80 md:w-96 text-sm sm:text-base md:text-lg pt-6 pb-6 px-4 rounded-2xl hover:shadow-lg flex flex-col gap-4 items-center justify-center">
      <h4>Хэрэглэгч нэвтрэх</h4>
      <form onSubmit={logSubmit} className='flex flex-col w-fit gap-2'>
      <div className="email">
        <FontAwesomeIcon icon={faAddressBook} />
        <input placeholder="Оюутны код" className='focus:outline-0' type="text" onChange={(e) => setoyutniCode(e.target.value)} />
      </div>
      <div className="pass">
      <FontAwesomeIcon icon={faLock} />
        <input placeholder="Нууц үг" type="password" className='focus:outline-0' onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="flex items-center justify-center p-0.5">
        <button title="Нэвтрэх"  className='bg-green-400 hover:bg-green-500 rounded-2xl text-center pl-1.5 pr-1.5 md:w-50 sm:w-40 w-32 ' >Нэвтрэх</button>
        </div>
        </form>
        <div className='flex flex-col items-center justify-center gap-1'>
        <div className="flex items-center justify-center p-0.5">
        <button className='bg-green-400 hover:bg-green-500 rounded-2xl text-center pl-1.5 pr-1.5 w-32 md:w-50 sm:w-40' onClick={() => navigate('/userReg')}>Бүртгүүлэх</button>
        </div>
        <div className="flex items-center justify-center p-0.5">
        <button className='bg-green-400 hover:bg-green-500 rounded-2xl text-center pl-1.5 pr-1.5 w-32 md:w-50 sm:w-40' onClick={() => navigate('/sanchLogin')}>Номын санчаар нэвтрэх</button>
        </div>
        </div>
        
    </div>
    </motion.div>
  )
}
export default UserLogin;