// PopUpDelete.js
import React from 'react';

export default function PopUpDelete({ isOpen, onConfirm, onCancel }) {

  return (
    <div className='h-40 w-60 bg-blue-300 z-10 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl'>
      <p>You sure you want to delete this?</p>
      <div>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
}
