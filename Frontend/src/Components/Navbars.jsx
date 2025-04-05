import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="max-w-6xl mx-auto flex justify-between items-center transition-all duration-100">
        {/* Large screen navigation */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1 shadow-sm transition-all duration-100" : "hover:text-blue-500 text-gray-700 transition-all duration-100"}>Нүүр</NavLink>
          <NavLink to="/userReg" className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1 shadow-sm transition-all duration-100" : "hover:text-blue-500 text-gray-700 transition-all duration-100"}>Ном</NavLink>
          <NavLink to="/sanchHome" className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1 shadow-sm transition-all duration-100" : "hover:text-blue-500 text-gray-700 transition-all duration-100"}>Эрдэм шинжилгээ</NavLink>
          <NavLink to="/sanchReg"className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1 shadow-sm transition-all duration-100" : "hover:text-blue-500 text-gray-700 transition-all duration-100"}>Нэвтрэх</NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
      
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-2 py-1 mt-2 rounded-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold transition-all duration-100" : "hover:text-blue-500"}>Нүүр</NavLink>
          <NavLink to="/userReg" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold transition-all duration-100" : "hover:text-blue-500"}>Ном</NavLink>
          <NavLink to="/sanchHome" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold transition-all duration-100" : "hover:text-blue-500"}>Эрдэм шинжилгээ</NavLink>
          <NavLink to="/sanchReg" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold transition-all duration-100" : "hover:text-blue-500"}>Нэвтрэх</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
