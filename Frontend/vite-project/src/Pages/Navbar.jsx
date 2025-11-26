import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* LOGO - Left */}
        <h1 className="text-white text-2xl font-bold">Kittyhawk</h1>

        {/* Mobile Menu Icon */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* MENU RIGHT SIDE */}
        <ul className={`md:flex gap-10 items-center text-white font-medium absolute md:static 
          bg-black md:bg-transparent w-full md:w-auto left-0 top-14 md:top-0 p-6 md:p-0
          md:ml-auto transition-all duration-300
          ${open ? "block" : "hidden md:flex"}`}>

          <li className="hover:text-gray-300"><Link to="/">Home</Link></li>
          <li className="hover:text-gray-300"><Link to="/about">About</Link></li>

          <li>
            <Link to="/signup">
              <button className="bg-blue-500 hover:bg-blue-600 px-5 py-1 rounded-md">
                Sign Up
              </button>
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
