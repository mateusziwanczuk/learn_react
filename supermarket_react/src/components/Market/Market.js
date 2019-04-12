import React from 'react';
import FilterForm from './FilterForm';

class Market extends React.Component {
  state = {
    products: [],
    departments: [],
    filter: {
      text: '',
      department: '',
    }
  }
  componentDidMount() {
    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        const departments = products.reduce((acc, product) => {
          product.department.split(' ').forEach(department => acc.add(department))
          return acc;
        }, new Set());
        this.setState({ products, departments: [...departments] })
      })
  }
  
  getData() {
    return this.state.products
      .filter(
        product => {
          const productNameLowerCased = product.name.toLowerCase();
          const textFilterLowerCased = this.state.filter.text.toLowerCase();
          const productDepartment = product.department;
          const departmentFilter = this.state.filter.department;
          return productNameLowerCased.includes(textFilterLowerCased) && productDepartment.includes(departmentFilter);
        })
  }
  render (){
    return (
      <>
        {console.log(this.state)}
        <h1>Products</h1>
        <FilterForm departments={this.state.departments} onFilterChange={filter => this.setState({filter})} />
        {/* <MarketProducts products={this.getData()} /> */}
      </>
    )
  }
}

export default Market;