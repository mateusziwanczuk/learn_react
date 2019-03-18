import React from 'react';
import Table from './Components/Table';
import FilterForm from './Components/FilterForm';

class App extends React.Component {
  state = {
    countries: [],
    regions: [],
    filter: {
      text: '',
      region: '',
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/countries.json')
      .then(res => res.json())
      .then(countries => {
        const regions = countries.reduce((acc, country) => {
          country.region.split(' ').forEach(region => acc.add(region));
            return acc;
        }, new Set());
        this.setState({ countries, regions: [...regions]});
    });
  }
  getData() {
      return this.state.countries.filter(
          country => {
              const countryNameLowerCased = country.name.toLowerCase();
              const textFilterLowerCased = this.state.filter.text.toLowerCase();
              const countryRegion = country.region;
              const regionFilter = this.state.filter.region;
              return countryNameLowerCased.includes(textFilterLowerCased) && countryRegion.includes(regionFilter);
          }
      )
  }
  render() {
      return(
      <>
          <h1>Countries</h1>
          <FilterForm onFilterChange={filter => this.setState({filter})} regions={this.state.regions}/>
          <Table countries={this.getData()}/>
      </>
      ) 
  }
}

export default App;
