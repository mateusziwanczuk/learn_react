import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'

const styles = {
    root: { flexGrow: 1 },
    grow: { flexGrow: 1 },
    linkContainer: {
        background: 'white',
        '& a': {
            textDecoration: 'none',
            color: 'grey',
        }
    }
};

function Navigation(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar className={classes.linkContainer}>
                    <NavLink to='/dashboard'>
                        <Button color="inherit">Dashboard</Button>
                    </NavLink>
                    <NavLink to='/arteon'>
                        <Button color="inherit">Arteon</Button>
                    </NavLink>
                    <NavLink to='/touareg'>
                        <Button color="inherit">Touareg</Button>
                    </NavLink>
                    <NavLink to='/chat'>
                        <Button color="inherit">Live Chat</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Navigation);