import React from 'react'
import Name from './Name'

const Age = (props) => {
    return (
        <h1>{props.age}</h1>
    )
}

const Occupation = (props) => {
    return (
        <h1>{props.occupation}</h1>
    )
}

const User = props => {
    return (
      <div>
        {!!props.age && <Age age = {props.age} />}
        {!!props.name && <Name name = {props.name} />}
        {!!props.occupation && <Occupation occupation = {props.occupation} />}
      </div>
    )
  }

export default User