import React, { useEffect, useState } from 'react';


function Picture({ id }) {
  // Check if id is defined
  if (id === null) {

    // You can return a default picture or handle it as needed
    return (
      <div>
        <img src="/profileicons/pic1.png" style={{ width: "30px" }} />
      </div>
    );
  }

  console.log(id, 'id')


  // Function to determine which picture to show based on user ID
  const determinePicture = (id) => {

    console.log(typeof id, 'type')
    let numbers = id.match(/\d/g)







    // create a variable for the sum and initialize it
    let sum = 0;

    // iterate over each item in the array
    for (let i = 0; i < numbers.length; i++) {
      sum += parseInt(numbers[i]);
    }

    console.log(sum, 'sum')


    switch (sum % 4) {
      case 0: return '/profileicons/pic1.png';
      case 1: return '/profileicons/pic2.png';
      case 2: return '/profileicons/pic3.png';
      case 3: return '/profileicons/pic4.png';
      default: return '/profileicons/pic1.png'; // Default picture
    }
  };







  return (
    <div>


      <img style={{ width: '30px' }} src={determinePicture(id)} alt="pic1" />
    </div>
  );
}

export default Picture;
