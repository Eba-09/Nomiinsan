import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="bg-neutral-300 w-full font-sans text-2xl flex items-center justify-around p-2 gap-20 text-center md:text-base sm:text-left sm:gap-2 xs:text-xs rounded-2xl max-w-xl">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
        Нүүр хуудас
      </NavLink>
      <NavLink to="/a" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
        Ном
      </NavLink>
      <NavLink to="/b" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
        Эрдэм шинжилгээний ажил
      </NavLink>
      <NavLink to="/c" className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
        Нэвтрэх
      </NavLink>
    </div>
  );
}

export default Navbar;
