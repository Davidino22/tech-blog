import React from 'react'
import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react'



function EditPost() {
  let { id } = useParams();
  const [post, setPost] = useState(null)
  const navigate = useNavigate();



  useEffect(() => {
    getPost()
  }, [])


  let url
  if (import.meta.env.PROD) {
    url = import.meta.env.VITE_BACK
  } else {
    url = import.meta.env.VITE_LOCAL_BACK
  }



  async function getPost() {

    const response = await fetch(`${url}/posts/${id}`)
    const data = await response.json()
    setPost(data)
    console.log(data)

  }



  async function handleSubmit(e) {
    e.preventDefault()


    const response = await fetch(`${url}/posts/${id}`, {

      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        post
      ),
    })

    const data = await response.json()
    console.log(data)
    navigate('/')

  }











  return (
    < div className="h-screen bg-gradient-to-tl from-red-500 to-blue-500  flex justify-center align-center ">

      <div className='flex flex-col justify-center align-center w-5/12'>
        <p className='text-5xl m-8 text-white border-b-4 '>Edit your Post</p>
        {
          post &&

          <form className='' onSubmit={handleSubmit}>

            <input className=' w-full h-16 border-b-2 border-slate-800 text-2xl ' placeholder='title' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value, })} />
            <textarea className=' w-full h-36 text-2xl' value={post.content} placeholder='text' onChange={(e) => setPost({ ...post, content: e.target.value })} />
            <button className='bg-blue-400 p-12 rounded-md py-2 text-white text-2xl' >edit</button>

          </form>}

      </div>
    </div>
  )
}

export default EditPost
