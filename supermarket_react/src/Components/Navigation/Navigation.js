import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
        textDecoration: 'none',
    },
    toolbar: {
        '& a': {
            textDecoration: 'none',
            color: 'white',
        }
    }
};

const Navigation = ({ classes }) => {
    return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <NavLink to={"/dashboard"}>
                    <Button color="inherit" >Dashboard</Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    </div>
    )
};

export default withStyles(styles)(Navigation);