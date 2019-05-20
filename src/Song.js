import React from 'react'


const Song = (props) => {
  return(
    <div>
      <h1> {props.title}</h1>
      <button onClick={() => props.deleteSong(props.id)}>Delete</button>

    </div>
  )

}

export default Song
