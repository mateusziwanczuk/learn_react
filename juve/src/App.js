import React, { Component } from 'react';
import Players from './Players/index'
import './App.css';

class App extends Component {
  state = {
    players: [],
  };
  componentDidMount() {
		fetch("players.json")
			.then(response => response.json())
      .then(players => this.setState({ players }));
  }
  render() {
    return (
      <>
        <Players players={this.state.players} />
        <div className="juve_logo"></div>
      </>
    );
  }
}

export default App;
