import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Footer() {
  const [on, setOn] = useState(false)

  function onclickLink() {
    setOn(true)
  }
  return (
    <div className='h-40 w-screen bg-green-100 text-4xl  '>

      <div className='grid grid-rows-2 h-full items-between'>
        <p>All rights stay with Lazar and David</p>
        <Link to="/about" onClick={onclickLink} className={on ? 'bg-blue-400' : null}>About</Link>
      </div>

    </div>
  )
}
