import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-black p-4">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold cursor-pointer">
          Kittyhawk
        </h1>

        {/* Menu */}
        <ul className="flex gap-6 text-white cursor-pointer">
          <li className="hover:text-gray-300">Home</li>
          <li className="hover:text-gray-300">About</li>
          <Link to="/signup">
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600">
  Sign Up
</button>
          </Link>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar
