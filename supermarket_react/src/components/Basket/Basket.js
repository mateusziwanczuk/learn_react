import React from 'react';
import './Basket.css'

class Basket extends React.Component {
  state = {
		basketProducts: JSON.parse(localStorage.getItem('basketProducts'))
	};
  render() { 
    return ( 
      <div className="basket__container">
        <h1>Basket</h1>
        {localStorage.getItem("basketProducts") !== null ?
							this.state.basketProducts.map((product, i) => {
								return (
									<div key={product.title}>
											<h5>{product.title}</h5>
									</div>
								);
							}) : null
						}
      </div>
    );
  }
}
 
export default Basket;