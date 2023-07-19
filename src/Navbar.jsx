import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserProvider';
import { GiHamburgerMenu } from 'react-icons/gi';




function Navbar() {

  const { user, setUser } = useUserContext()


  function logout() {
    localStorage.removeItem('user')
    setUser(null)


  }




  return (
    <div className="navbar bg-pink-100 w-full h-12  shadow-md border-none flex justify-between relative sticky top-0">
      <Link to="/"><div className='absolute left-6 top-2 text-2xl hover:cursor-pointer '>Tech-Blog</div></Link>


      <div className=" NavLinks  bg-pink-100 flex flex-col absolute top-10 right-0 p-4 md:flex md:static md:flex-row   md:text-2xl  ">
        <div className="Links
        flex flex-col
           text-2xl  md:flex-row md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:absolute  md:justify-between md:left-1/2 md:w-60 " >
          <div className='hover:cursor-pointer '>About</div>
          <div className='hover:cursor-pointer' >Profile</div>
          <Link to="/new" >New</Link>
        </div>
        <div className='buttons flex-col gap-y-2 flex md:flex-row md:absolute  md:right-3 md:top-1/2  md:-translate-y-1/2  '>

          {/* check if someone is loged in if yes then show us a logout button */}
          {user === null ?
            <> <Link to="/login" ><button className='bg-blue-400 px-2 rounded-md py-1 text-white text-xl mx-2'>SignIn</button></Link>
              <Link to="/register" ><button className='bg-blue-400 px-2 rounded-md py-1 text-white text-xl mx-2'> Register</button></Link> </> :
            <button className='bg-blue-400 px-2 rounded-md py-1 text-white font-mono text-xl  ' onClick={logout}>Log out </button>}

        </div>


      </div>


      <GiHamburgerMenu className='md:hidden absolute right-6 top-2 ' size={30} />
    </div>
  )
}

export default Navbar
