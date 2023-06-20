// import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-tl from-red-500 to-blue-500 flex justify-center">
        <div className="w-8/12 bg-yellow-100">
          <input className="w-8/12 h-16 bg-white border-4 border-black-500 shadow mt-16" type="text" />
          <button className="bg-blue-400 p-4 rounded-md" >Post</button>

        </div>
      </div>

    </div>
  )
}
