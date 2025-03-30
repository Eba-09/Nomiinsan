import { motion } from 'framer-motion';
import { useState } from 'react';
import '../App.css'
import Navbar from '../Components/Navbars';
export default function LibraryHome() {
  const [search, setSearch] = useState('');
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-blue-600 text-white py-4 px-6 rounded-xl shadow-lg flex justify-between items-center gap-7 sm:p-2 sm:gap-2 x"
      >
        <h1 className="lg:text-lg xl:text-xl font-bold  sm:text-sm">📚 МУБИС Номын сан</h1>
        <Navbar />
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Ном хайх..."
          className="p-2 rounded-md text-black bg-gray-300 w-fit xs:w-20 focus:w-30"
        />
      </motion.header>
      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {['Сургалтын материал', 'Эрдэм шинжилгээ', 'Цахим ном'].map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="text-gray-700 mt-2">Энд номын тайлбар орно.</p>
          </motion.div>
        ))}
      </motion.main>
    </div>
  );
}
