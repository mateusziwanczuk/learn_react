import React from 'react';
import FilterForm from './FilterForm';
import MarketProducts from './MarketProducts';

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
          const productNameLowerCased = product.title.toLowerCase();
          const textFilterLowerCased = this.state.filter.text.toLowerCase();
          const productDepartment = product.department;
          const departmentFilter = this.state.filter.department;
          return productNameLowerCased.includes(textFilterLowerCased) && productDepartment.includes(departmentFilter);
        })
  }

  setItemToLocalStorage = product => {
      if (localStorage.getItem("basketProducts") !== null) {
        let basketProducts = JSON.parse(localStorage.getItem("basketProducts"));
        if (!basketProducts.some(item => item.id === product.id)) {
            basketProducts.push(product);
            alert('Product added to your basket!');
            localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
        } else {
            alert('You can change quantity in Basket bookmark.')
        }
    } else {
        const basketProducts = [product];
        alert('Product added to your basket!');
        localStorage.setItem("basketProducts", JSON.stringify(basketProducts));
    }
  }

  render (){
    return (
      <div className="market__container">
        <div className="market__container__filter">
          <h1>Products</h1>
          <FilterForm departments={this.state.departments} onFilterChange={filter => this.setState({filter})} />
        </div>
        <MarketProducts setItemToLS={this.setItemToLocalStorage} products={this.getData()} />
      </div>
    )
  }
}

export default Market;