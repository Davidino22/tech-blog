import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from './UserProvider';




function Navbar() {

  const { user, setUser } = useUserContext()


  function logout() {
    localStorage.removeItem('user')
    setUser(null)


  }




  return (
    <div className="navbar bg-pink-100 w-full h-12  shadow-md border-none flex justify-between relative sticky top-0">
      <Link to="/"><div className='absolute left-6 top-2 text-2xl hover:cursor-pointer '>Tech-Blog</div></Link>


      <div className=" NavLinks flex flex-row md:flex-col absolute top-10 ">
        <div className="Links flex flex-row absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  text-2xl justify-between w-60  " >
          <div className='hover:cursor-pointer '>About</div>
          <div className='hover:cursor-pointer '>Profile</div>
          <Link to="/new">New</Link>
        </div>
        <div className='buttons flex flex-row absolute right-8 top-1 gap-6  '>

          {/* check if someone is loged in if yes then show us a logout button */}
          {user === null ?
            <> <Link to="/login" ><button className='bg-blue-400 px-4 rounded-md py-2 text-white'>SignIn</button></Link>
              <Link to="/register" ><button className='bg-blue-400 px-4 rounded-md py-2 text-white'> Register</button></Link> </> :
            <button className='bg-blue-400 px-4 rounded-md py-2 text-white font-mono' onClick={logout}>Log out </button>}

        </div>


      </div>



    </div>
  )
}

export default Navbar
