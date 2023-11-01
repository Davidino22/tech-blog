import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PostCard from './PostCard';




export default function Home() {
  let url
  if (import.meta.env.PROD) {
    url = import.meta.env.VITE_BACK
  } else {
    url = import.meta.env.VITE_LOCAL_BACK
  }
  const [posts, setPosts] = useState([])


  useEffect(() => {
    getPosts()
  }, [])



  async function getPosts() {
    const response = await fetch(` ${url}/posts`)
    const data = await response.json()
    for (let post of data) {
      const postUser = post.userId
      const userResponse = await fetch(`${url}/user/${postUser}`);
      const userData = await userResponse.json();


      post.user = userData;
      const userEmail = post.user.email

    }


    setPosts(data)



  }









  return (
    <div className="bg-gradient-to-tl from-red-500 to-blue-500 flex justify-center min-h-[100vh]">
      <div className="w-10/12 lg:pl-32 lg:pr-32 md:pr-20 md:pl-20 md:w-8/12  flex bg-yellow-100 pl-8 pr-8 flex-col items-center pt-8" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
        <h1 className="font-mono mb-8 text-white text-4xl border-b-8 border-white w-full pb-8">Enjoy the Discussions</h1>
        <>
          {posts.map(post => {
            return (
              <PostCard title={post.title} content={post.content} key={post._id} id={post._id} user={post.user.email} userId={post.user._id} />
            )
          })}
        </>
      </div>
    </div>
  )
}
