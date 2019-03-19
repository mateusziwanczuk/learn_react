import React from 'react';
import Table from './Components/Table';
import FilterForm from './Components/FilterForm';
import './App.css'

class App extends React.Component {
  state = {
    countries: [],
    regions: [],
    filter: {
      text: '',
      region: '',
    },
    order: {
      field: 'name',
      dir: 'ASC',
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
      return this.state.countries
      .filter(
          country => {
              const countryNameLowerCased = country.name.toLowerCase();
              const textFilterLowerCased = this.state.filter.text.toLowerCase();
              const countryRegion = country.region;
              const regionFilter = this.state.filter.region;
              return countryNameLowerCased.includes(textFilterLowerCased) && countryRegion.includes(regionFilter);
          })
      .sort((countryA, countryB) => {
          const fieldA = countryA[this.state.order.field];
          const fieldB = countryB[this.state.order.field];

          if (fieldA > fieldB){
            return this.state.order.dir === 'ASC' ? 1 : -1;
          } else if (fieldA === fieldB) {
            return 0;
          } else {
            return this.state.order.dir === 'ASC' ? -1 : 1;
          }
        })
  }
  onOrderChange = order => {
    this.setState({ order })
  }
  render() {
      return(
      <>
          <h1><span>🗺</span>Countries</h1>
          <FilterForm regions={this.state.regions} onFilterChange={filter => this.setState({filter})} />
          <Table countries={this.getData()} order={this.state.order} onOrderChange={this.onOrderChange} />
      </>
      ) 
  }
}

export default App;
