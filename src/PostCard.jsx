import React from 'react'
import { Link } from 'react-router-dom'
import Picture from './Picture'


export default function PostCard(props) {
  const { title, content, id, user, userId } = props
  return (
    <Link to={`/posts/${id}`} className="w-3/5 min-h-40 my-4 hover:scale-105 transition ease-in-out shadow-md hover:shadow-xl"  >

      <div className='bg-slate-200 w-full h-full rounded-lg   border'>
        <div className='  border-b-2 h-20  border-slate-300 '><p className='text-2xl'>{title}</p>
          <Picture id={userId} />
          <p className='text-red-500'>{user}</p> </div>

        <p className='pt-4 text-2xl h-full'>{content}</p>

      </div>


    </Link>
  )
}
