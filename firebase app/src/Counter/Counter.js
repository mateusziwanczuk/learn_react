import React, { Component } from "react";
import firebase from 'firebase'
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = () => ({});

class Counter extends Component {
    state = {
        counter: 0
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        firebase.database().ref('counter').once('value')
            .then((snapshot) => {
                this.setState({
                    counter: snapshot.val()
                })
            })
    }

    increase = () => {
        firebase.database().ref('counter').set(this.state.counter + 1)
            .then(() => { this.getData() })
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <h1>Counter: <span>{this.state.counter}</span></h1>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={ this.increase }>
                    <AddIcon/>
                </Fab>
                <Fab color="secondary" aria-label="Remove" className={classes.fab}>
                    <RemoveIcon/>
                </Fab>
            </div>
        );
    }
}

export default withStyles(styles)(Counter);