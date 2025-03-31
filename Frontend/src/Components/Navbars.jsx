import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className=" w-full font-sans text-2xl flex items-center justify-around p-2 gap-20 text-center md:text-base sm:text-left sm:gap-2 xs:text-xs rounded-2xl max-w-xl bg-blue-100">
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
