import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useUserContext } from './UserProvider';
import { useNavigate, Link, useParams } from 'react-router-dom'
import Picture from './Picture';













export default function Comments(props) {

  let url
  if (import.meta.env.PROD) {
    url = import.meta.env.VITE_BACK
  } else {
    url = import.meta.env.VITE_LOCAL_BACK
  }
  const { comments } = props
  const { user, setUser } = useUserContext()
  const navigate = useNavigate();






  async function deleteItem(id) {
    // console.log('deleted')

    const response = await fetch(`${url}/comments/${id}`, {


      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },


    })
    const data = await response.json()
    console.log(data);
    navigate(0)
  }










  return (

    <>
      {comments.map((comment) => <div key={comment._id} className="bg-white w-3/5  md:p-4 md:m-1 relative text-left  rounded p-8"  ><div className='border-slate-800 border-b-2 text-xl flex gap-4'> <Picture id={comment.userId} /> <p>{comment.user.email} </p></div> <p>{comment.text} </p>

        {user && user._id === comment.userId ? < AiOutlineDelete size={30} color={"red"} className=" absolute top-2 right-10 cursor-pointer" onClick={() => deleteItem(comment._id)} /> : null} </div>)
      }


    </>
  )
}
