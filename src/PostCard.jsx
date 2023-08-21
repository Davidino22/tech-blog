import React from 'react'
import { Link } from 'react-router-dom'


// Modul for the postcard










export default function PostCard(props) {
  const { title, content, id, user } = props
  return (
    <Link to={`/posts/${id}`} className="w-3/5 min-h-40 my-4 hover:scale-105 transition ease-in-out shadow-md hover:shadow-xl"  >

      <div className='bg-lime-50  w-full h-full rounded-lg  '>
        <div className='  border-b-2 border-slate-800 '><p className='text-2xl'>{title}</p> <p className='text-red-500'>{user}</p> </div>

        <p className='pt-4 text-2xl h-full'>{content}</p>

      </div>


    </Link>
  )
}
