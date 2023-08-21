import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { useUserContext } from './UserProvider';
import { useNavigate, Link, useParams } from 'react-router-dom'













export default function Comments(props) {
  const { comments } = props
  const { user, setUser } = useUserContext()
  const navigate = useNavigate();






  async function deleteItem(id) {
    // console.log('deleted')

    const response = await fetch(`http://localhost:3000/api/comments/${id}`, {


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
      {comments.map((comment) => <div key={comment._id} className="bg-white w-3/5  p-4 m-1 relative text-left  rounded"  ><p className='border-slate-800 border-b-2 text-xl '>{comment.user.email}</p> <p>{comment.text} </p>

        {user._id === comment.userId ? < AiOutlineDelete size={30} color={"red"} className=" absolute top-2 right-10 cursor-pointer" onClick={() => deleteItem(comment._id)} /> : null} </div>)
      }


    </>
  )
}
