import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
    grow: {
        flexGrow: 1,
    },
    linkContainer: {
        '& a': {
            textDecoration: 'none',
        }
    }
};

function Navigation(props) {
    const {classes} = props;

    return (
        <div>
            <AppBar position="static" color="default">
                <Toolbar className={classes.linkContainer}>
                    <NavLink to='/counter'>
                        <Button>Counter</Button>
                    </NavLink>
                    <NavLink to='/counter-live'>
                        <Button>Live Counter</Button>
                    </NavLink>
                    <NavLink to='/profile'>
                        <Button>Profile</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Navigation);