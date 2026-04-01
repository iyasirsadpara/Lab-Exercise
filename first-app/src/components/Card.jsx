import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/024/689/019/small/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-virtual-tunnel-warp-made-with-digital-code-data-flow-illustration-vector.jpg" alt=" this is imagw" />
        <p>this is the images of the goood programmer, so make it very serious and put your full potential for this course</p>
    </div>
  )
}

export default Card
