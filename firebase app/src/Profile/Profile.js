import React, { Component } from "react";
import firebase from 'firebase';
import { withStyles } from '@material-ui/core/styles';
import Auth from '../Auth/Auth';
import AvatarSrc from "../Img/avatar.jpg";
import Fab from '@material-ui/core/Fab';
import ImageIcon from '@material-ui/icons/Image'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

const styles = () => ({});

class Profile extends Component {
    state = {
        avatarUrl: '',
        user: null,
        file: null,
    }
    handleOnInputFileChange = (event) => {
        this.setState({
            file: event.target.files[0]
        })
    };

    handleAdd = () => {
        if (this.state.user) {
            firebase.storage().ref('/avatars/' + this.state.user.uid).put(this.state.file)
                .then(() => {
                    alert('Image added');
                    this.getAvatarUrl();
                    this.setState({
                        file: null
                    })
                })
                .catch(error => console.error(error));
        }
    };

    handleRemove = () => {
        if (this.state.user) {
            firebase.storage().ref('/avatars/' + this.state.user.uid).delete()
                .then(() => {
                    alert('Image deleted');
                    this.getAvatarUrl();
                })
                .catch(error => console.error(error));
        }
    };

    getAvatarUrl = () => {
        if (this.state.user) {
            const uid = this.state.user.uid;
            firebase.storage().ref('/avatars/' + uid).getDownloadURL()
                .then(url => {
                    this.setState({
                        avatarUrl: url,
                    })
                })
                .catch(error => console.error(error));
        }
    };

    componentDidMount() {
        const ref = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            }, () => this.getAvatarUrl())
        });

        this.setState({
            ref
        })
    }

    componentWillUnmount() {
        this.state.ref && this.state.ref();
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="container">
                <Auth>
                    <h1>Profile</h1>
                    <div>
                        <img alt="avatar" src={this.state.avatarUrl ? this.state.avatarUrl : AvatarSrc} />
                        <div>
                            <input
                                accept="image/*"
                                className={classes.input}
                                style={{ display: 'none' }}
                                id="raised-button-file"
                                multiple
                                type="file"
                                onChange={this.handleOnInputFileChange}
                            />
                            <label htmlFor="raised-button-file">
                                <Fab size="small" color="default" component="span">
                                    <ImageIcon />
                                </Fab>
                            </label>
                            {this.state.file && `${this.state.file.name}`}
                            <Fab size="small" color="primary" component="span" onClick={this.handleAdd}>
                                <AddIcon />
                            </Fab>
                            <Fab size="small" color="secondary" component="span" onClick={this.handleRemove}>
                                <RemoveIcon />
                            </Fab>
                        </div>
                    </div>
                </Auth>
            </div>
        );
    }
}

export default withStyles(styles)(Profile);