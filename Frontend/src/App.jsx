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
        className=" text-blue-600 py-4 px-6 rounded-l shadow-sm flex justify-between items-center gap-7 sm:p-1 sm:gap-2"
      >
        <h1 className="lg:text-lg text-sm md:text-md xl:text-xl 2xl:text-xl font-bold  sm:text-sm">📚 Мэдээлэл зүйн тэнхимийн номын сан</h1>
        <Navbar />
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ном хайх..."
          className="p-2 rounded-md text-black bg-gray-300 transition-all duration-0.5 w-full xs:w-20 md:w-30 lg:w-40 lg:focus:w-50 focus:w-30 sm:focus:w-30 md:focus:40 "
        />
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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
