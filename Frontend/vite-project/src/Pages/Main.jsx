import React from 'react'
import img1 from '../assets/img1.png'
import { anticipate, motion } from 'motion/react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <motion.div 
      className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-14 w-full gap-8 md:gap-0 text-center md:text-left"
    >
      {/* Left Section */}
      <div className="max-w-sm">
        <motion.h1  
          transition={{ delay:1, duration:3, ease:anticipate }}
          animate={{ x:50 }}
          className="text-3xl md:text-5xl font-bold mb-4 text-white"
        >
          Welcome to Our Website
        </motion.h1>

        <motion.p 
          transition={{ delay:2, duration:0.7 }}
          animate={{ x:50 }}
          className="text-gray-200 mb-6"
        >
          Build fast, beautiful, and modern UI using React and Tailwind CSS.
        </motion.p>

        <Link to="/todo">
          <motion.button 
            whileTap={{ scale:0.9 }} 
            whileHover={{ scale:1.05 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            To-do
          </motion.button>
        </Link>
      </div>

      {/* Image */}
      <motion.img 
        src={img1} 
        alt="Hero"
        animate={{ opacity:1, y:0 }}
        initial={{ opacity:0, y:40 }}
        transition={{ duration:1.5 }}
        className="w-64 md:w-96 drop-shadow-xl"
      />
      
    </motion.div>
  )
}

export default Main
