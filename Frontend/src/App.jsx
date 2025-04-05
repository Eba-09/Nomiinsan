import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './Components/Navbars';
import ImageUploader from './Components/sanch/BookCreate';
import SanchHome from './Pages/SanchHome';
import SanchLogin from './Components/sanch/SanchLogin';
import UserLogin  from './Components/user/UserLog';
import UserReg from './Components/user/UserReg';
import SanchReg from './Components/sanch/SanchReg';
import LibraryHome from './Pages/LibraryHome';
import UserHome from './Pages/UserHome';
import UserProfile from './Components/user/UserProfile';
import Logo from './images/logos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function App() {
  const [search, setSearch] = useState('');
  return (
    <BrowserRouter>
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
        <h1 className="lg:text-lg text-sm md:text-md xl:text-xl 2xl:text-xl font-bold  sm:text-sm"> Мэдээлэл зүйн тэнхимийн номын сан</h1>
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
      </motion.header>
        <div>
          <Routes>
            <Route path="/" element={<LibraryHome />}/>
            <Route path='/imageupload' element={<ImageUploader />} />
            <Route path='/sanchHome' element={<SanchHome />} />
            <Route path='/sanchLogin' element={<SanchLogin />} />
            <Route path='/userLogin' element={<UserLogin />} />
            <Route path='/userReg' element={<UserReg />} />
            <Route path='/sanchReg' element={<SanchReg />} />
            <Route path='/userHome' element={<UserHome />} />
            <Route path='/userProfile' element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
