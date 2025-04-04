import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Large screen navigation */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1" : "hover:text-blue-500 text-gray-700"}>Нүүр</NavLink>
          <NavLink to="/userLogin" className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1" : "hover:text-blue-500 text-gray-700"}>Ном</NavLink>
          <NavLink to="/sanchHome" className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1" : "hover:text-blue-500 text-gray-700"}>Эрдэм шинжилгээ</NavLink>
          <NavLink to="/sanchLogin"className={({ isActive }) => isActive ? "text-blue-500 font-bold border-b-1 rounded-2xl pl-1 pr-1" : "hover:text-blue-500 text-gray-700"}>Нэвтрэх</NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
        </button>
      </div>
      
      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-2 py-1 mt-2 rounded-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}>Нүүр</NavLink>
          <NavLink to="/userLogin" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}>Ном</NavLink>
          <NavLink to="/sanchHome" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}>Эрдэм шинжилгээ</NavLink>
          <NavLink to="/sanchLogin" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "hover:text-blue-500"}>Нэвтрэх</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
