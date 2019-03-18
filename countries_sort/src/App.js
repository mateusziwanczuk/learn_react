import React from 'react';
import Table from './Components/Table';
import FilterForm from './Components/FilterForm';

class App extends React.Component {
  state = {
    countries: [],
    regions: [],
    filterCountries: {
      text: ''
    }
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
        <FilterForm onFilterChange={filter => this.setState({filterCountries: filter})} regions={this.state.regions} />
        <Table countries = {this.state.countries
          .filter(country => country.name
          .toLowerCase()
          .includes(this.state.filterCountries.text))} 
        />
      </>
    );
  }
}

export default App;
