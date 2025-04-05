import { motion } from 'framer-motion';
import '../App.css'
export default function LibraryHome() {
  return (
    <div className="min-h-full bg-gray-100 text-gray-900 p-6">
      <motion.main
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {['Сургалтын материал', 'Эрдэм шинжилгээ', 'Цахим ном'].map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-4 mr-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold">{category}</h2>
            <p className="text-gray-700 mt-2">Энд номын тайлбар орно.</p>
          </motion.div>
        ))}
      </motion.main>
      
    </div>
  );
}
