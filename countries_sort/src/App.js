import React from 'react';
import Table from './Components/Table';
import FilterForm from './Components/FilterForm';

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
        <FilterForm onFilterChange={filter => console.log('filter changed', filter)}/>
        <Table countries = {this.state.countries} />
      </>
    );
  }
}

export default App;
