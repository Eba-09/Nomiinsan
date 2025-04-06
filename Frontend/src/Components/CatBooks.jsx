import { motion } from 'framer-motion';
import '../App.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
  function CatBooks() {
  
    const location = useLocation();
    const navigate = useNavigate();
  const { catid } = location.state || {};
  const [books, setbooks] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if(catid){
    axios
        .get(`http://localhost:8000/api/lib/category/book/${catid}`)
        .then((res) =>{
            setbooks(res.data.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }
  },[catid])
  const Zahialah = (nomCode) => {
    if(user){
        axios
             .post('http://localhost:8000/api/lib/zahialga', {
                nomCode: nomCode,
                userCode: user
            })
            .then((res) => {
                if(res.data.success){
                    alert("amjilttai zahiallaa.")
                }
            })
            .catch((e) => {
                alert("zahialga amjiltgui bolloo")
            })
    }
    else{
        navigate('/userLogin')
    }
  }
  const renderBooks = () => {
    return books.map((book) => (
      <div key={book._id} className="min-w-[140px] bg-white rounded-2xl flex flex-col items-center hover:shadow-lg transition duration-300 flex-shrink-0">
        <img
        src={`http://localhost:8000${book.photo}`}
            alt={book.name}
            className="w-30 h-40 object-cover bg-cover rounded-t-2xl"
          />
          <div className="p-2">
            <h3 className="text-sm text-center font-semibold text-gray-800 line-clamp-1">
              {book.name}
            </h3>
            <p className="text-sm text-center text-gray-800 line-clamp-1">
                {book.authorId?.AuthorLname || "Unknown Author"}
            </p>
            <button className="bg-green-300 hover:bg-green-500 rounded-2xl text-sm text-center pl-1.5 pr-1.5 w-20 md:w-40 sm:w-25" onClick={() => Zahialah(book._id)}>Захиалах</button>
          </div>
      </div>
    ));
  };
  return (
    <div className="min-h-full bg-gray-100 text-gray-900 p-4">
      <motion.main
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-2 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
       {renderBooks()}   
      </motion.main>
    </div>
  );
}
export default CatBooks