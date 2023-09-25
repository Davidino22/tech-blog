import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react'



function EditPost() {
  let { id } = useParams();
  const [post, setPost] = useState(null)
  const [post2, setPost2] = useState({ title: "misa ide u skolu", content: "misa dobio jedan" })

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










  return (
    < div className="h-screen bg-gradient-to-tl from-red-500 to-blue-500  flex justify-center align-center ">
      {post &&

        <form className='flex flex-col justify-center align-center '>

          <input className='bg-blue-500 w-80 h-30' value={post2.title} onChange={(e) => setPost2({ title: e.target.value, ...post2 })} />
          <textarea className='bg-yellow-500 w-60 h-60' value={post2.content} onChange={(e) => setPost2({ content: e.target.value, ...post2 })} />
          <button className='bg-blue-300 text-white'>edit</button>

        </form>}

    </div>
  )
}

export default EditPost
