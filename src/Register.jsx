import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  function changeEmail(e) {
    setEmail(e.target.value)

  }



  function changePassword(e) {
    setPassword(e.target.value)
  }

  // post mail and password into database
  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:3000/api/user', {

      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email, password
      }),
    })

    //transform jason into object
    const data = await response.json()


    console.log(data)
    navigate("/")
  }




  return (<>

    <div className="bg-gradient-to-tl from-red-500 to-blue-500 h-screen  flex justify-center items-center" >

      <form className="flex flex-col w-96 h-3/5 bg-green-100 border border-red-100 rounded-xl shadow-2xl p-12 justify-around" onSubmit={handleSubmit}>
        <div className=' flex flex-col'>
          <label htmlFor='email ' className='text-2xl'  >Email</label>
          <input type="email" id="email" className="border-black w-30 h-8" onChange={changeEmail} value={email} />

        </div>
        <div className='flex flex-col '>
          <label htmlFor='password ' className='text-2xl'>Password</label>
          <input id="pasword" type="password" className="border-black w-30 h-8" onChange={changePassword} value={password} />
        </div>
        <button className='bg-blue-400 px-4 rounded-md py-2 text-white text-2xl' type="submit">Register</button>


      </form>

    </div>







  </>

  )



}

export default Register