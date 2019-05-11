import React, { Component } from 'react'
import { connect } from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter
            // give the value of the counter in global state managed by redux and give it in the form of a prop name count
    }
}
    // after class, before export!

export default connect(mapStateToProps)(Counter)
    // connect in a function which returns a function which takes then a component as input.
    // in connect() we pass two pieces of information to connect.
