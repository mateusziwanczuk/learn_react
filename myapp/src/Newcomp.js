import React, { Component } from 'react';

class Newcomp extends Component {
    render(){
        const { name, age } = this.props;
        return(
            <div className="NewComp">
                <div>Name: { name } </div> 
                        {/* this.props.name */}
                <div>Age: { age } </div>
                        {/* this.props.age */}
            </div>
        )
    }
}

export default Newcomp;