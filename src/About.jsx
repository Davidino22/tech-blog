import React from 'react'

export default function About() {
  return (
    <div className=" min-h-screen text-white bg-gradient-to-tl from-red-500 to-blue-500 flex justify-center md:py-20 ">

      <div className='w-2/3 min-h-72 rounded ' style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
        <h1 className='text-6xl border-b-4 border-white py-8 font-mono '>About the Tech blog</h1>
        <p className='px-6 text-2xl font-sans py-4'>The Tech-blog was created by Lazar Savkovic and David Pecic. It is a place where developers, coders and like-minded People can discuss tech topics. It is aligned on Reddit. Everyone with a profile can create a Post or comment other posts.We want to connect more developers so we started this project in july 2023 </p>

        <p className='text-4xl font-mono '>Stay tuned for more from us!</p>
      </div>

    </div>
  )
}
