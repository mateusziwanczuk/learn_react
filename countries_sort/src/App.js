import React from 'react';

class App extends React.Component {
  state = {
    countries: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/countries.json')
      .then(res => res.json())
      .then(countries=> this.setState({countries}))
  }
  render() {
    return (
      <>
        <h1>Countries</h1>
        <ul>
            {this.state.countries.map(country => (
                <li>{country.name}</li>
            ))}
        </ul>
      </>
    );
  }
}

export default App;
