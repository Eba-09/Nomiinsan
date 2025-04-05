import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
function BookSlider({ title = "Popular Books", books = [] }) {
  const scrollRef = useRef(null);
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
        <button className="text-blue-600 hover:underline text-sm">See More</button>
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
              key={book.id}
              className="min-w-[140px] bg-white rounded-2xl hover:shadow-lg transition duration-300 flex-shrink-0"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-1">{book.author}</p>
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
