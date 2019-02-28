import React, { Component } from 'react';
import Players from './Players.json';
import './App.css';

class App extends Component {
  state = {
    highlightningColor: "button-blue"
  };
  changeColorBlue = e => {
    this.setState( 
      { highlightningColor: e.target.className = "button-blue" }
    )
  }
  changeColorRed = e => {
    this.setState( 
      { highlightningColor: e.target.className = "button-red" }
    )
  }
  render() {
    return (
      <>
        <div className="button_container">
          <button className="button-blue" onClick = {this.changeColorBlue}>BLUE</button>
          <button className="button-red" onClick = {this.changeColorRed}>RED</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                Player name
              </th>
              <th>
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {Players.map(
              player =>
                <tr key={player.id} className={player.points > 100 ? this.state.highlightningColor : null}>
                  <td className="usernameColumn">{player.username}</td>
                  <td className="pointsColumn">{player.points}</td>
                </tr>
              )
            }
            <tr>
              <td className="greyBackground"><b>Total</b></td>
              <td className="pointsColumn greyBackground"><b>
                { Players
                  .map(Players => Players.points)
                  .reduce((a, b) => a + b)
                }
              </b></td>
            </tr>
            <tr>
              <td className="greyBackground"><b>Average</b></td>
              <td className="pointsColumn greyBackground"><b>
                { Players
                  .map(Players => Players.points)
                  .reduce((a, b) => a + b) / Players.length
                }
              </b></td>
            </tr>
          </tbody>
        </table>
        <div className="juve_logo"></div>
      </>
    );
  }
}

export default App;
