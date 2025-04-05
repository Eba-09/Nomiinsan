import { motion } from 'framer-motion';
import '../App.css';
import React, { useState, useEffect } from 'react';
import BookSlider from '../Components/BookSlider';
import axios from 'axios';

function LibraryHome() {
  const [categoryBooks, setCategoryBooks] = useState({});
  const [categoryid, setcategoryid] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/lib/category/book/67f131d44f4702327dac47e8')
      .then((res) => {
        const books = res.data.data;
        const grouped = books.reduce((acc, book) => {
          const catName = book.category?.name || 'Unknown';
          if (!acc[catName]) {
            acc[catName] = [];
          }
          acc[catName].push(book);
          return acc;
        }, {});
        setCategoryBooks(grouped);
      })
      .catch((e) => {
        console.error("Категорийн мэдээлэл татагдсангүй: " + e);
      });
  }, []);
  return (
    <div className="min-h-full bg-gray-100 text-gray-900 p-8">
      <motion.main
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        {Object.entries(categoryBooks).map(([categoryName, books], index) => (
          <motion.div  key={index} className="bg-white p-2 mr-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <BookSlider title={categoryName} books={books}/>
          </motion.div>
        ))}
      </motion.main>
    </div>
  );
}

export default LibraryHome;
