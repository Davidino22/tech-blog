import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { AiOutlineDelete, } from 'react-icons/ai';
import { GrEdit } from 'react-icons/gr';
import { IoMdArrowBack } from 'react-icons/io';
import { useUserContext } from './UserProvider';
import Comments from './Comments';
import PopUpDelete from './PopUpDelete';
import Picture from './Picture';




export default function Subsection() {
  const [post, setPost] = useState(null)
  const [input, setInput] = useState('')
  const { user, setUser } = useUserContext()
  const [comments, setComments] = useState([])
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  let url
  if (import.meta.env.PROD) {
    url = import.meta.env.VITE_BACK
  } else {
    url = import.meta.env.VITE_LOCAL_BACK
  }





  const navigate = useNavigate();
  let { id } = useParams();












  async function getPost() {

    const response = await fetch(`${url}/posts/${id}`)
    const data = await response.json()
    const postUserId = data.userId
    const userResponse = await fetch(`${url}/user/${postUserId}`);
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
    const response = await fetch(`${url}/posts/${id}`, {
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

    const response = await fetch(`${url}/comments`, {
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
      const response = await fetch(`${url}/comments/${commentId}`);
      const data = await response.json();

      // Check if data exists and has the 'userId' property and it's not null
      if (data && data.userId !== null) {
        const userID = data.userId;

        const userResponse = await fetch(`${url}/user/${userID}`);
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
  async function handleSubmit(e) {

    e.preventDefault()
    await comment()
    setInput("")
    navigate(0)

  }







  return (
    <div className=' min-h-screen bg-gradient-to-tl from-red-500 to-blue-500 flex flex-col items-center  '>


      <div className='w-8/12 min-h-screen md:pl-20 md:pr-20  flex flex-col  items-center  relative pt-16 pb-16' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} >
        <div className=''>
          <Link to="/" className=' absolute top-2 left-0 text-2xl  '><IoMdArrowBack size={30} />Home </Link>


          {user && post &&
            user._id === post.userId ? < button onClick={deleteItem} className=" absolute top-4 right-0"><AiOutlineDelete size={50} color={"FF7676"} /> </button > : null}
          {isPopUpOpen && <PopUpDelete onConfirm={handleConfirm} onCancel={handleCancel} />}


        </div>



        {post && <div className='w-full bg-teal-50 mt-8 rounded-t-md h-full overflow-auto border-b-2 border-slate-500 p-8 gap-4   '>

          <div className=' py-2  border-slate-300 border-b-2 relative'>
            <p className='text-xl font-bold-200  '>{post.title}  </p>

            <div className='flex gap-4 p-4'>
              <Picture id={post.userId} />
              <p>{post.user.email}</p>
            </div>
            {user && post &&
              user._id === post.userId ?
              <Link to={`/posts/${id}/edit`} className='absolute top-2 right-2'><GrEdit size={30} /></Link> : null}</div>

          <p className=' text-lg h-full '>{post.content}</p>

        </div>}

        {user ?
          <form className='w-full  flex h-12 m-2  ' onSubmit={handleSubmit} >
            <textarea className=' rounded-md  w-2/5 text-2xl bg-white ' placeholder="Comment..." style={{ flexGrow: 2, resize: "none" }} onChange={handleInput}
              value={input}
            ></textarea>

            <button className=' w-1/5  bg-blue-400 text-2xl text-white rounded-md ' style={{ flexGrow: 1 }} type="submit" >Post</button>
          </form> : <div className='p-8'>If you want to add a comment you need to <Link to="/login" className="bg-yellow-400 p-4 rounded-md ">SignIn</Link> </div>}

        <Comments comments={comments} />
      </div>


    </div >
  )
}
