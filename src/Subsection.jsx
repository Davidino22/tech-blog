import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'




export default function Subsection() {
  const [post, setPost] = useState(null)
  const [input, setInput] = useState('')

  const navigate = useNavigate();
  let { id } = useParams();
  console.log(id)

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((response) => response.json())

      .then((data) => {

        setPost(data)
      });
  }, [id])




  async function deleteItem() {
    console.log('deleted')

    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {


      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },


    })
    const data = await response.json()
    console.log(data);
    navigate('/');
  }


  // getting the input
  function handleInput(e) {
    setInput(e.target.value)

  }



  return (
    <div className='h-screen bg-gradient-to-tl from-red-500 to-blue-500 flex flex-row '>


      <div className='w-8/12 h-full  flex flex-col  items-center pt-8' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} >
        <div className='flex-row'>
          <Link to="/" className='border-red border'>Back Home</Link>

          <button onClick={deleteItem} className=" border border-red">Delete</button>
        </div>



        {post && <div className='w-3/5 bg-white rounded-md h-36 '>
          <p className='text-2xl border-b-2 border-slate-500 py-2'>{post.title}</p>
          <p className='pt-4'>{post.content}</p>
        </div>}
        <div className='w-3/5  flex ' >
          <input className=' rounded-md  w-2/5 border  bg-slate-300' placeholder="Comment..." style={{ flexGrow: 2 }} onChange={handleInput}></input>
          <button className=' w-1/5 bg-blue-400  rounded-md ' style={{ flexGrow: 1 }} >Coment</button>
        </div>
      </div>


    </div >
  )
}
