import React from 'react'








export default function Comments(props) {
  const { comments } = props
  return (
    <>
      {comments.map((comment) => <div key={comment._id} className="bg-indigo-100 w-3/5  p-4 text-left  border-b-2 border-slate-800"  >{comment.text} {comment.user.email}</div>)
      }
    </>
  )
}
