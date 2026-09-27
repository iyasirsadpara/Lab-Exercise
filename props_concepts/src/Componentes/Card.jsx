import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s" alt="" />
            <h2>{props.user}</h2>
            <p>My name is {props.user}, and i am {props.age} year old, form  {props.area}</p>
            <button>view profile</button>
        </div>
    )
}

export default Card
