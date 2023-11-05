import React from 'react'
import { Link } from 'react-router-dom'
import Picture from './Picture'


export default function PostCard(props) {
  const { title, content, id, user, userId } = props
  return (
    <Link to={`/posts/${id}`} className="w-full min-h-40 my-4 hover:scale-105 transition ease-in-out shadow-md hover:shadow-xl"  >

      <div className='bg-violet-100 w-full h-full rounded-lg p-8  '>
        <div className='border-b-2  border-slate-300' >
          <p className='md:text-2xl text-xl '>{title} </p>
          <div className=' flex p-4 gap-4' >
            <Picture id={userId} />
            <p className='text-red-500  '> {user} </p> </div>
        </div>


        <p className='pt-4 md:text-xl text-lg h-full'>{content}</p>

      </div>


    </Link>
  )
}
