import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AvatarSrc from "../Img/avatar.jpg";
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save'
import ImageIcon from '@material-ui/icons/Image'
import Auth from '../Auth/Auth';

const styles = () => ({});

class Profile extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <Auth>
                    <h1>Profile</h1>
                    <div>
                        <img alt="avatar" src={AvatarSrc} />
                        <div>
                            <input
                                accept="image/*"
                                className={classes.input}
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                                <Fab size="small" color="primary" component="span">
                                    <ImageIcon />
                                </Fab>
                                <Fab size="small" color="primary" aria-label="Edit" className={classes.fab}>
                                    <SaveIcon />
                                </Fab>
                            </label>
                        </div>
                    </div>
                </Auth>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);