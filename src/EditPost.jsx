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
      {post &&

        <form className='flex flex-col justify-center align-center ' onSubmit={handleSubmit}>

          <input className='bg-blue-500 w-80 h-30' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value, })} />
          <textarea className='bg-yellow-500 w-60 h-60' value={post.content} onChange={(e) => setPost({ ...post, content: e.target.value })} />
          <button className='bg-blue-300 text-white' >edit</button>

        </form>}

    </div>
  )
}

export default EditPost
