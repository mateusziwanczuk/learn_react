import React from 'react'

const User = props => {
    return (
      <div>
        {!!props.age && <Age age={props.age}/>}
      </div>
    )
  }

const Age = props => {
  return (
    <h3>{props.age}</h3>
  )
}

export default User