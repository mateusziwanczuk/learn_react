import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = () => ({});

class ChatLive extends Component {
    state = {
        messages: [],
        currentMessage: '',
        email: 'test@test.pl'
    };

    handleChange = (event) => {
        this.setState({
            currentMessage: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const ref = this.state.ref;
        if (ref && this.state.currentMessage) {
            const newMessageId = ref.push().key;
            ref.child(newMessageId).set({
                email: this.state.email,
                text: this.state.currentMessage
            })
            this.setState.currentMessage = '';
        }
    };

    componentDidMount() {
        const ref = firebase.database().ref('messages');
        const authRef = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                email: user.email
            })
        });

        ref.once('value').then( snapshot => {
            const messages = snapshot.val();
            const messagesArray = Object.keys(messages).map(key => ({
                id: key,
                ...messages[key]
            }));

            this.setState({
                messages: messagesArray
            })
        });

        ref.on('value', (snapshot) => {
            const messages = snapshot.val();
            const messagesArray = Object.keys(messages).map(key => ({
                id: key,
                ...messages[key]
            }));

            this.setState({
                messages: messagesArray
            })
        });

        this.setState({
            ref,
            authRef,
            email: firebase.auth().currentUser
        })
    }

    componentWillUnmount() {
        this.state.ref && this.state.ref.off();
        this.state.authRef && this.state.authRef();
    }

    render() {
        const { classes } = this.props;

        return (
        <div className="container">
            <h2><b>Live Chat</b></h2>
            {this.state.messages.slice(-10).map((message) => {
                return <Paper key={message.id} className={classes.root} elevation={1}>
                    <span style={{color: 'grey'}}>{message.email} :</span>
                    <span>{message.text}</span>
                </Paper>
            })}
            <form className="input-message" onSubmit={this.handleSubmit}>
                <TextField
                    value={this.state.currentMessage}
                    onChange={this.handleChange}
                />
                <Button variant='contained' color='primary' type='submit'>SEND</Button>
            </form>
        </div>
        )
    }
}

export default withStyles(styles)(ChatLive); 