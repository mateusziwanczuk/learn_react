import React from 'react'
import Welcome from './Welcome'

const User = props => {
    return (
      <Welcome name={ props.name }/>
    )
  }

export default User