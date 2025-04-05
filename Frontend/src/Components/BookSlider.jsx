import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function BookSlider({ title = "Popular Books", books = [] }) {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <motion.button
        whileHover={{scale: 1.1}}
        className="text-blue-600 cursor-pointer text-sm">See More</motion.button>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
        >
          <ChevronLeft size={20} />
        </button>
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2"
        >
          {books.map((book) => (
            <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{duration: 0.1}}
              key={book._id}
              className="min-w-[140px] bg-white rounded-2xl flex flex-col items-center hover:shadow-lg transition duration-300 flex-shrink-0"
            >
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
                <button className="bg-green-300 hover:bg-green-500 rounded-2xl text-sm text-center pl-1.5 pr-1.5 w-20 md:w-40 sm:w-25" onClick={() => navigate('/userLogin')}>Захиалах</button>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
export default BookSlider;
