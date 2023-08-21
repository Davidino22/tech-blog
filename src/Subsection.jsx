import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai';

import { IoMdArrowBack } from 'react-icons/io';
import { useUserContext } from './UserProvider';
import Comments from './Comments';



export default function Subsection() {
  const [post, setPost] = useState(null)
  const [input, setInput] = useState('')
  const { user, setUser } = useUserContext()
  const [comments, setComments] = useState([])


  const navigate = useNavigate();
  let { id } = useParams();
  // console.log(id)

  useEffect(() => {
    // uzimamo post iz bekenda sa id-em iz naseg url-a/ route-a
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then((response) => response.json())

      .then((data) => {
        // stavljamo taj post u state post
        setPost(data)
        // uzimamo samo identifikatore komentara iz tog posta
        const commentIDs = data.comments

        // identikfikatore predajemo u funkciju getcomments
        getcomments(commentIDs)


      });
  }, [id])





  async function deleteItem() {


    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {


      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },


    })
    const data = await response.json()

    navigate('/');
  }


  // getting the input
  function handleInput(e) {
    setInput(e.target.value)
    // console.log(input)
  }


  // posting the comment / commenting
  async function comment() {

    const response = await fetch(`http://localhost:3000/api/comments`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(
        { text: input, postId: id, userId: user._id }
      ),
    })
    const data = await response.json()
    console.log(data)

  }

  // funkcija koja dobije identifikatore komentara i komentare koje dobija iz bekenda stavlja u stejt comments
  async function getcomments(commentIDs) {
    let commentsArr = [];

    for (let commentId of commentIDs) {
      const response = await fetch(`http://localhost:3000/api/comments/${commentId}`);
      const data = await response.json();

      // Check if data exists and has the 'userId' property and it's not null
      if (data && data.userId !== null) {
        const userID = data.userId;

        const userResponse = await fetch(`http://localhost:3000/api/user/${userID}`);
        const userData = await userResponse.json();
        // zapamti usera u objekat komentara
        data.user = userData;

        commentsArr.push(data);
      } else {
        console.error(`Invalid comment data for comment ID ${commentId}:`, data);
      }
    }

    setComments(commentsArr);
  }


  //handelsubmit function
  function handleSubmit(e) {

    e.preventDefault()
    comment()
    setInput("")
    navigate(0)

  }







  return (
    <div className=' min-h-screen bg-gradient-to-tl from-red-500 to-blue-500 flex flex-col items-center  '>


      <div className='w-8/12 h-full  flex flex-col  items-center  relative pt-16 pb-16' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} >
        <div >
          <Link to="/" className=' absolute top-4 left-0 text-2xl'><IoMdArrowBack size={30} />Home </Link>

          <button onClick={deleteItem} className=" absolute top-4 right-0"><AiOutlineDelete size={50} color={"red"} /> </button >
        </div>



        {post && <div className='w-3/5 bg-teal-50  rounded-t-md h-36 border-b-2 border-slate-500 '>

          <p className='text-2xl border-b-2 border-slate-500 py-2'>{post.title}</p>
          <p className='p-4  '>{post.content}</p>
        </div>}

        {user ?
          <form className='w-3/5  flex  ' onSubmit={handleSubmit} >
            <textarea className=' rounded-md  w-2/5 text-2xl bg-white' placeholder="Comment..." style={{ flexGrow: 2, resize: "none" }} onChange={handleInput}
              value={input}
            ></textarea>

            <button className=' w-1/5 bg-blue-400 text-2xl text-white rounded-md ' style={{ flexGrow: 1 }} type="submit" >Comment</button>
          </form> : <div>If you want to add a comment you need to <Link to="/login" className="bg-yellow-400 p-2">SignIn</Link> </div>}

        <Comments comments={comments} />
      </div>


    </div >
  )
}
