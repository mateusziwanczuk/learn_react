import React, { Component } from "react";
import firebase from 'firebase';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = () => ({});

class Counter extends Component {
    state = {
        counterLive: 0,
        refs: []
    }
    componentDidMount(){
        firebase.database()
            .ref('counter-live')
            .on('value', snapshot => {
                this.setState({
                    counterLive: snapshot.val()
                })
            })
        const newRefs = [
            firebase.database().ref('counter-live'), 
            ...this.state.refs]
        this.setState({
            refs: newRefs
        })
    }
    componentWillUnmount(){
        this.state.refs.forEach(ref => ref.off())
    }

    increase = () => {
        firebase.database().ref('counter-live').set(this.state.counterLive + 1)
    }

    decrease = () => {
        firebase.database().ref('counter-live').set(this.state.counterLive - 1)
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <h1>{`Counter: ${this.state.counterLive}`}</h1>
                <Fab color="primary" aria-label="Add" className={classes.fab} onClick={ this.increase }>
                    <AddIcon/>
                </Fab>
                <Fab color="secondary" aria-label="Remove" className={classes.fab} onClick={ this.decrease }>
                    <RemoveIcon/>
                </Fab>
            </div>
        );
    }
}

export default withStyles(styles)(Counter);