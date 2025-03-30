import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LibraryHome from './Pages/LibraryHome';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always stays on top */}
        {/* Content */}
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<LibraryHome />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
