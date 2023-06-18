import { useState } from 'react';
import Navbar from './Navbar';

function Login() {
  // const [email, SetEmail] = useState("")
  // const [password, SetPassword] = useState("")
  // const [noemail, SetNoEmail] = useState("")

  // function ChangeEmail(e) {
  //   SetEmail(e.target.value)
  // }



  // function ChangePassword(e) {
  //   SetPassword(e.target.value)
  // }








  return (<>
    <Navbar />
    <div className="bg-gradient-to-tl from-red-500 to-blue-500 h-screen  flex justify-center items-center" >

      <div className="flex flex-col w-96 h-3/5 bg-green-100 border border-red-100 rounded-xl shadow-2xl p-12 justify-around">
        <div className=' flex flex-col'>
          <label htmlFor='email ' className='text-2xl' >Email</label>
          <input type="email" id="email" className="border-black w-30 h-8" onChange={ChangeEmail} />

        </div>
        <div className='flex flex-col '>
          <label htmlFor='password ' className='text-2xl'>Password</label>
          <input id="pasword" type="password" className="border-black w-30 h-8" onChange={ChangePassword} />
        </div>
        <button className='bg-blue-400 px-4 rounded-md py-2 text-white text-2xl'>SignIn</button>


      </div>

    </div>







  </>

  )


}

export default Login