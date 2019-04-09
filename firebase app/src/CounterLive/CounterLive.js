import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const styles = () => ({});

class Counter extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <h1>Counter: <span>0</span></h1>
                <Fab color="primary" aria-label="Add" className={classes.fab}>
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