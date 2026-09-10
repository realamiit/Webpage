import React from 'react'

const Card = (props) => {

    console.log(props.user,props.age);

  return (
    <div>
      <div  className='card'>
        <img src={props.img} />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id!</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
