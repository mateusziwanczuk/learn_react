import React from 'react';
import Table from './Components/Table'

class App extends React.Component {
  state = {
    countries: []
  }
  componentDidMount() {
    fetch('http://localhost:3000/countries.json')
      .then(res => res.json())
      .then(countries => this.setState({countries}))
  }
  render() {
    return (
      <>
        <h1>Countries</h1>
        <Table countries = {this.state.countries} />
      </>
    );
  }
}

export default App;
