import React from 'react'

const Card = ({name, content, buttonText}) => {
  return (
    <div>

    <div className="card">
      <h1>{name}</h1>
      <p>{content}</p>
      <button>{buttonText}</button>
    </div>
    </div>
  )
}

export default Card
