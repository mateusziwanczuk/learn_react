import React from 'react';
import Hello from './Hello';

const World = props => {
    return (
        <Hello showAlertWorld = {props.showAlertWorld}/>
    )
}

export default World