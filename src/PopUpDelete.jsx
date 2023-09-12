// PopUpDelete.js
import React from 'react';

export default function PopUpDelete({ isOpen, onConfirm, onCancel }) {

  return (
    <div className='h-48 w-4/6 bg-blue-400 z-10 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl rounded space-between grid text-white'>
      <p className='text-2xl pt-2'>You sure you want to delete this?</p>
      <div className=' flex p-4 justify-between text-2xl'>
        <button onClick={onConfirm} className="bg-yellow-200 px-4 rounded">Yes</button>
        <button onClick={onCancel} className="bg-yellow-200 px-4 rounded">No</button>
      </div>
    </div>
  );
}
