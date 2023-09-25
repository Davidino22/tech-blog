import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='h-40 w-screen bg-green-100 text-4xl'>
      <div className='grid grid-rows-2 h-40 items-between'>
        <p className="m-0">All rights stay with Lazar and David</p>
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