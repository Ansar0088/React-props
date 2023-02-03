import React from 'react'
import "./Header.css"

const Movies = (props) => {
  return (
    <div className='main'>
      <img  src={props.img} alt=""/>
      <p>{props.Title}</p>
      <p>{props.Year}</p>


    </div>
  )
}

export default Movies