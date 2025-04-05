import { motion } from 'framer-motion';
import '../App.css'
import React from 'react';
import BookSlider from '../Components/BookSlider';
 function LibraryHome() {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 4,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 5,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },

    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
  ];
  return (
    <div className="min-h-full bg-gray-100 text-gray-900 p-6">
      <motion.main
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-4"
      >
        <motion.div
            className="bg-white p-4 mr-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BookSlider title="Программчлалын хэл" books={books} />
          </motion.div>
          <motion.div
          className="bg-white p-4 mr-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <BookSlider title="Дифломны ажил" books={books} />
        </motion.div>
        <motion.div
        className="bg-white p-4 mr-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <BookSlider title="Эрдэм шинжилгээний ажил" books={books} />
        </motion.div>
        <motion.div
        className="bg-white p-4 mr-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <BookSlider title="Багшлахуйн ном" books={books} />
        </motion.div>
      </motion.main>
    </div>
  );
}
export default LibraryHome
