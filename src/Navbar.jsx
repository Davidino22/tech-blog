import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserProvider';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Picture from './Picture';




function Navbar() {

  const { user, setUser } = useUserContext()
  const [dropdownOn, setDropdownOn] = useState(false)
  //create state for activelinkbar to see which one is clicked and to change the background
  const [activeLink, setActiveLink] = useState('');
  console.log(user)


  const location = useLocation()


  useEffect(() => {
    setDropdownOn(false)
  }, [location.pathname])


  function handleLinkClick(linkPath) {
    setActiveLink(linkPath);
  };




  function logout() {
    localStorage.removeItem('user')
    setUser(null)


  }


  function dropdown() {
    setDropdownOn(!dropdownOn)
  }






  return (
    <div className="navbar bg-pink-100 w-full h-12  shadow-md border-none flex justify-between relative sticky top-0 z-10">
      <Link to="/" className={activeLink === '/' ? 'bg-blue-400' : ''} onClick={() => handleLinkClick('/')}><div className='absolute left-6 top-2 text-2xl hover:cursor-pointer '>Tech-Blog</div></Link>

      {/* created in html logic for the dropdownmenu in javascript */}
      <div className={` NavLinks  flex   flex-row  text-2xl  `}>
        <div className="Links border-red-500 border-2 hidden md:flex
           text-2xl flex-row top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute
            left-1/2 w-60 gap-8" >


          <Link to="/new" className={activeLink === '/new' ? 'bg-blue-400' : ''} onClick={() => handleLinkClick('/new')}>New</Link>
          <Link
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""}
          >
            About
          </Link>

        </div>
      </div>
      <button className='absolute right-6 top-2' onClick={dropdown}><Picture id={user._id} /> </button>


      <div className={`dropdown bg-pink-100   min-w-40 absolute p-6 gap-4 right-0 flex flex-col
            ${dropdownOn ? 'top-10' : '-top-72'}
         `}>
        {user &&
          <p>{user.email}</p>}

        <div className="flex flex-col md:hidden" >

          <Link to="/new" className={activeLink === '/new' ? 'bg-blue-400' : ''} onClick={() => handleLinkClick('/new')}>New</Link>
        </div>

        <div className='buttons flex flex-col gap-y-2 '>

          {/* check if someone is loged in if yes then show us a logout button */}
          {user === null ?
            <> <Link to="/login" ><button className='bg-blue-400 px-2 rounded-md py-1 text-white text-xl mx-2 w-full'>SignIn</button></Link>
              <Link to="/register" ><button className='bg-blue-400 px-2 rounded-md py-1 text-white text-xl mx-2 w-full'> Register</button></Link> </> :
            <button className='bg-blue-400 px-2 rounded-md py-1 text-white font-mono text-xl  w-full' onClick={logout}>Log out </button>}

        </div>
      </div>

    </div>
  )
}

export default Navbar
