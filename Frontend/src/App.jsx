import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbars';
import ImageUploader from './Components/sanch/BookCreate';
import SanchHome from './Pages/SanchHome';
import SanchLogin from './Components/sanch/SanchLogin';
import UserLogin  from './Components/user/UserLog';
import UserReg from './Components/user/UserReg';
import SanchReg from './Components/sanch/SanchReg';
import LibraryHome from './Pages/LibraryHome';
import UserProfile from './Pages/UserProfile';
import Logo from './images/logos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './Components/AuthContext';
import {CircleUser } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import CatBooks from './Components/CatBooks';
import OneBook from './Components/OneBook';
import Books from './Components/Book';
import ErdemShinj from './Components/ErdemShinj';
function App() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);
  return (
      <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" text-blue-600 py-4 px-6 rounded-l bg-white  flex justify-between items-center gap-7 sm:p-1 sm:gap-2"
      >
        <div className='flex flex-row items-center gap-1 sm:gap-5'>
        <img src={Logo} width='40px' height="20px"/>
        <h1 className="lg:text-lg text-sm hidden sm:block md:text-md xl:text-xl 2xl:text-xl font-bold  sm:text-sm"> Мэдээлэл зүйн тэнхимийн номын сан</h1>
        </div>
        <Navbar />
        <div
        className='p-1 flex items-center justify-between rounded-md text-black bg-gray-300 transition-all duration-0.5 w-full xs:w-30 md:w-40 lg:w-50 '
        >
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ном хайх..."
          className=" outline-0 lg:focus:w-38 focus:w-25 focus:bg-gray-200 rounded-sm sm:focus:w-30 md:w-35 md:focus:40 w-full xs:w-20"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='w-8'/>
        </div>
        {token ? (
      <motion.div>
          <CircleUser className='w-6 sm:w-8 md:w-10' onClick={() => navigate('userProfile')} />
        </motion.div>
        ) : null}
      </motion.header>
      <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: -30 }}
      transition={{ duration: 0.6 }}
      >
      </motion.div>
        <div>
          <Routes>
            <Route path="/" element={<LibraryHome />}/>
            <Route path='/imageupload' element={<ImageUploader />} />
            <Route path='/sanchHome' element={<SanchHome />} />
            <Route path='/sanchLogin' element={<SanchLogin />} />
            <Route path='/userLogin' element={<UserLogin />} />
            <Route path='/userReg' element={<UserReg />} />
            <Route path='/sanchReg' element={<SanchReg />} />
            <Route path='/userProfile' element={<UserProfile />} />
            <Route path='/catBooks' element={<CatBooks />} />
            <Route path='/oneBook' element={<OneBook />} />
            <Route path='/Book' element={<Books />} />
            <Route path='/erdemShinj' element={<ErdemShinj />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
