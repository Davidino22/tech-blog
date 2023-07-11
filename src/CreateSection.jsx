import React from 'react'
import { useState } from 'react'
import { useUserContext } from './UserProvider';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';



export default function CreateSection() {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const { user, setUser } = useUserContext()
  const navigate = useNavigate()


  useEffect(() => {
    console.log(user)
    if (!user) {
      navigate('/login')
    }
  }, [user])






  async function handleSubmit(e) {
    e.preventDefault()
    console.log({ title: title, content: text, userId: user._id })

    const response = await fetch('http://localhost:3000/api/posts', {


      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        { title: title, content: text, userId: user._id }
      ),
    })
    console.log(response)
    const data = await response.json()
    console.log(data)
    navigate('/')

  }

  function handleTitle(e) {
    setTitle(e.target.value)
  }

  function handleText(e) {
    setText(e.target.value)
  }


  // usmeri ga u drugu stranicu za navigate








  return (
    <div className="h-screen bg-gradient-to-tl from-red-500 to-blue-500 pt-16 flex justify-center align-center ">

      <div className="text-center bg-yellow-600 w-5/12 h-2/5 rounded-lg flex border-red-200">


        <form className="w-full" onSubmit={handleSubmit} >
          <label htmlFor='title' className='font-mono text-white ' ></label>
          <input className='w-full  h-8  ' placeholder='Title' type="text" id="title" onChange={handleTitle} value={title} />
          <label htmlFor="text" className='text-white font-mono'></label>
          <textarea className='w-full h-18' id="text" onChange={handleText} value={text} placeholder="write a descripton..."></textarea>




          <div className=' flex justify-end border-2 border-red-200 w-full bg-white'>
            <button className='bg-blue-400 px-4 rounded-md py-2 text-white text-2xl font-mono ' type="submit" >Post </button>
          </div>



        </form>


      </div>
    </div>
  )
}
