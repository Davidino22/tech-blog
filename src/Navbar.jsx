import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useUserContext } from './UserProvider';


import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Picture from './Picture';




function Navbar() {

  const { user, setUser } = useUserContext()
  const [dropdownOn, setDropdownOn] = useState(false)

  console.log(user)


  const location = useLocation()


  useEffect(() => {
    setDropdownOn(false)
  }, [location.pathname])





  function logout() {
    localStorage.removeItem('user')
    setUser(null)


  }


  function dropdown() {
    setDropdownOn(!dropdownOn)
  }





  return (
    <div className="navbar bg-slate-600 w-full h-12 shadow-md border-none flex justify-between relative sticky top-0 z-10 text-white text-xl">
      <Link to="/" >
        <div className='absolute left-6 top-2  hover:bg-sky-700'>Tech-Blog</div>
      </Link>

      <div className={`NavLinks flex flex-row `}>
        <div className="Links md:flex hidden flex-row top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute left-1/2 w-60 gap-8">
          <NavLink to="/new" className={({ isActive }) =>
            [

              isActive ? "bg-blue-500" : "", 'hover:bg-sky-700'

            ].join(" ")
          } >New Post</NavLink>



          <NavLink to="/about" className={({ isActive }) =>
            [

              isActive ? "bg-blue-500" : "", 'hover:bg-sky-700'

            ].join(" ")
          } >About</NavLink>


        </div>
      </div>

      <button className='absolute right-6 top-2' onClick={dropdown}>
        <Picture id={user ? user._id : null} className="hover:bg-sky-700" />
      </button>

      <div className={`dropdown bg-min-w-40 bg-slate-600 transition-all duration-700  absolute p-6 gap-4 right-0 flex flex-col ${dropdownOn ? 'top-10 opacity-100' : '-top-72 opacity-0'}`}>
        {user ? (
          <>
            <p>{user.email}</p>
            {/* ... other user-related content */}
            <button className='bg-blue-400 md:px-2 rounded-md md:py-1 text-white font-mono text-xl w-full' onClick={logout}>Log out</button>

          </>
        ) : (
          <>
            <Link to="/login"><button className='bg-blue-400 md:px-2 rounded-md md:py-1 text-white text-xl md:mx-2 w-full'>Sign In</button></Link>
            <Link to="/register"><button className='bg-blue-400 md:px-2 rounded-md md:py-1 text-white text-xl mx-2 w-full'>Register</button></Link>


          </>

        )}
        <NavLink to="/new" className={({ isActive }) =>
          [

            isActive ? "bg-blue-500" : "", 'hover:bg-sky-700 md:hidden'

          ].join(" ")
        } >New Post</NavLink>



        <NavLink to="/about" className={({ isActive }) =>
          [

            isActive ? "bg-blue-500" : "", 'hover:bg-sky-700 md:hidden'

          ].join(" ")
        } >About</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
