import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-pink-100 w-full h-12 shadow-md border-none flex justify-between relative">
      <div className='absolute left-6 top-2 text-2xl hover:cursor-pointer '>Tech-Blog</div>
      <div className="NavLinks flex flex-row  ">
        <div className="Links flex flex-row absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-2xl justify-between w-60  " >
          <div className='hover:cursor-pointer '>About</div>
          <div className='hover:cursor-pointer '>Profile</div>
        </div>
        <div className='buttons flex flex-row absolute right-8 top-1 gap-6  '>
          <button className='bg-blue-400 px-4 rounded-md py-2 text-white'>SignIn</button>
          <button className='bg-blue-400 px-4 rounded-md py-2 text-white'> Register</button>
        </div>

      </div>

    </div>
  )
}

export default Navbar
