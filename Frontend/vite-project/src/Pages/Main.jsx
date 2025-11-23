import React from 'react'
import img1 from '../assets/img1.png'
import {anticipate, motion} from 'motion/react'

function Main() {
  return (
    <motion.div className="flex items-center justify-between p-10">

      {/* Left Text Section */}
      <div className="max-w-xl">
        <motion.h1  transition={{delay:1, duration:3, ease:anticipate}} animate={{x:400, rotate:[0,360,180,360] }} className="text-4xl font-bold mb-4">
          Welcome to Our Website
        </motion.h1>

        <motion.p transition={{delay:2, duration:0.7}} animate={{x:400}} className="text-gray-100 mb-6">
          Build fast, beautiful, and modern UI using React and Tailwind CSS.
        </motion.p>

        <motion.button whileTap={{scale:0.8}} whileHover={{backgroundColor:'blue'}}  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Get Started
        </motion.button>
      </div>

      {/* Right Side Image */}
      <img 
        src={img1}
        alt="Hero" 
        className="w-96"
      />

    </motion.div>
  )
}

export default Main
