import React from 'react'
import { NavLink } from 'react-router-dom'
import Picture from './Picture.jsx'

export default function Footer() {
  return (
    <div className='md:h-40 w-screen bg-slate-600 text-3xl text-white'>
      <div className='grid grid-rows-2 md:h-40 items-between'>
        <p className="m-0">All rights stay with Lazar and David</p>
        {/* <Picture  /> */}
        <nav className='flex gap-16 justify-center'>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""}
          >
            About
          </NavLink>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : ""}
          >
            New
          </NavLink>
        </nav>
      </div>
    </div>
  )
}