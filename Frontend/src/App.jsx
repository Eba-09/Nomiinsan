import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './Components/Navbars';
import ImageUploader from './Components/ImageUploader';
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
        className="bg-blue-600 text-white py-4 px-6 rounded-l shadow-lg flex justify-between items-center gap-7 sm:p-1 sm:gap-2 @xs:p-0 @xs:text-xs"
      >
        <h1 className="lg:text-lg xl:text-xl font-bold  sm:text-sm">📚 Мэдээлэл зүйн тэнхимийн номын сан</h1>
        <Navbar />
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ном хайх..."
          className="p-2 rounded-md text-black bg-gray-300 transition-all duration-0.5 w-fit xs:w-20 focus:w-70 "
        />
      </motion.header>
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {['Сургалтын материал', 'Эрдэм шинжилгээ', 'Цахим ном'].map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 mr-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="text-gray-700 mt-2">Энд номын тайлбар орно.</p>
          </motion.div>
        ))}
      </motion.main>
        <div className="flex-grow">
          <Routes>
            <Route path="/"/>
            <Route path='/imageupload' element={<ImageUploader />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
