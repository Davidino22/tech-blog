import React from 'react'

export default function About() {
  return (
    <div className=" min-h-screen  bg-gradient-to-tl from-red-500 to-blue-500 flex justify-center py-20 ">
      <div className='w-2/3 bg-green-100 h-96 rounded '>
        <div>
          <h1 className='text-6xl border-b-4 border-black py-8 font-mono '>About the Tech blog</h1>
          <p className='px-6 text-2xl font-sans py-4'>The Tech-blog was created by Lazar Savkovic and David Pecic. It is a place where developers coders and like-minded People can discuss tech topics. It is aligned on Reddidt. Everyone with a profile can create a Post or comment other posts.We want to connect more developers so we started this project in july 2023 </p>

          <p className='text-4xl font-mono '>Stay tuned for more by us!</p>
        </div>
      </div>
    </div>
  )
}
