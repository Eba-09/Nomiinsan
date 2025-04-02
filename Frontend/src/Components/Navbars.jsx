import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
const Navbar = () => {
  return (
    <div className=" w-full font-sans text-sm lg:text-lg  xl:text-md 2xl:text-md flex items-center justify-center p-1 xl:gap-5 2xl:gap-10 text-center md:text-base sm:text-sm sm:gap-2 rounded-2xl max-w-2xl bg-blue-100">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-500 transition-all"}>
        Нүүр хуудас
      </NavLink>
      <NavLink to="/a" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-500 transition-all"}>
        Ном
      </NavLink>
      <NavLink to="/b" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-500 transition-all"}>
        Эрдэм шинжилгээний ажил
      </NavLink>
      <NavLink to="/c" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700 hover:text-blue-500 transition-all"}>
        Нэвтрэх
      </NavLink>
    </div>
  );
}

export default Navbar;
