import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { AiOutlineDelete } from 'react-icons/ai';

import { IoMdArrowBack } from 'react-icons/io';
import { useUserContext } from './UserProvider';
import Comments from './Comments';
import PopUpDelete from './PopUpDelete';




export default function Subsection() {
  const [post, setPost] = useState(null)
  const [input, setInput] = useState('')
  const { user, setUser } = useUserContext()
  const [comments, setComments] = useState([])
  const [isPopUpOpen, setPopUpOpen] = useState(false);





  const navigate = useNavigate();
  let { id } = useParams();












  async function getPost() {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`)
    const data = await response.json()
    const postUserId = data.userId
    const userResponse = await fetch(`http://localhost:3000/api/user/${postUserId}`);
    const userData = await userResponse.json();

    data.user = userData




    // stavljamo taj post u state post
    setPost(data)
    // uzimamo samo identifikatore komentara iz tog posta
    const commentIDs = data.comments


    // identikfikatore predajemo u funkciju getcomments
    getcomments(commentIDs)

  }




  useEffect(() => {
    getPost()

  }, [id])







  // create deleteitem to setPopUpOpen to true

  async function deleteItem() {
    setPopUpOpen(true);
  }

  //async function where i delte the item
  async function handleConfirm() {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    });
    const data = await response.json();
    navigate('/');
    setPopUpOpen(false);
    console.log('deleted')
  }

  // if i want to cancel my deleting
  function handleCancel() {
    setPopUpOpen(false);
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


          {user && post &&
            user._id === post.userId ? < button onClick={deleteItem} className=" absolute top-4 right-0"><AiOutlineDelete size={50} color={"red"} /> </button > : null}
          {isPopUpOpen && <PopUpDelete onConfirm={handleConfirm} onCancel={handleCancel} />}


        </div>



        {post && <div className='w-3/5 bg-teal-50  rounded-t-md h-full overflow-auto border-b-2 border-slate-500 '>

          <div className=' py-2 '><p className='text-2xl'>{post.title}</p><p>{post.user.email}</p></div>

          <p className=' text-2xl h-full '>{post.content}</p>

        </div>}

        {user ?
          <form className='w-3/5  flex  ' onSubmit={handleSubmit} >
            <textarea className=' rounded-md  w-2/5 text-2xl bg-white' placeholder="Comment..." style={{ flexGrow: 2, resize: "none" }} onChange={handleInput}
              value={input}
            ></textarea>

            <button className=' w-1/5 bg-blue-400 text-2xl text-white rounded-md ' style={{ flexGrow: 1 }} type="submit" >Comment</button>
          </form> : <div className='p-8'>If you want to add a comment you need to <Link to="/login" className="bg-yellow-400 p-4 rounded-md ">SignIn</Link> </div>}

        <Comments comments={comments} />
      </div>


    </div >
  )
}
