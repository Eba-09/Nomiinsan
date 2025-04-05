import React from 'react'
import BookSlider from '../Components/BookSlider'
import { motion } from 'framer-motion'
const UserHome = () => {
  return (
    <div>
        <motion.div
            className="bg-white p-4 mr-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <BookSlider title="Программчлалын хэл" books={books} />
          </motion.div>
    </div>
  )
}

export default UserHome