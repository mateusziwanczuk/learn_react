import React from 'react';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/countries.json')
      .then(res => res.json())
      .then(console.log)
  }
  render() {
    return (
      <h1>Hello world</h1>
    );
  }
}

export default App;
