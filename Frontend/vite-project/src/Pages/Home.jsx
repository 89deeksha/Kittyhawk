import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function Home() {
  return (
    <div className="bg-gray-500 min-h-screen w-full">
        
        {/* Navbar stays at top */}
        <Navbar/>

        {/* Main content below */}
        <main className="pt-4 px-4">
          <Main/>
        </main>

    </div>
  )
}

export default Home
