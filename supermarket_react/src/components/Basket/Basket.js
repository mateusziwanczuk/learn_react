import React from 'react';
import './Basket.css'

class Basket extends React.Component {
  state = {
		basketProducts: JSON.parse(localStorage.getItem('basketProducts'))
	};
	totalPrice = this.state.basketProducts
		.map(basketProduct => basketProduct.price)
		.reduce((a,b) => a + b)
  render() { 
    return ( 
			<div className="basket__container">
				<h1>Basket</h1>
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{localStorage.getItem("basketProducts") !== null ?
								this.state.basketProducts.map((product, i) => {
									return (
										<tr key={product.title}>
												<td>{product.title}</td>
												<td>1</td>
												<td>$ {product.price}</td>
										</tr>
									);
								}) : null
							}
					</tbody>
					<tfoot>
						<tr>
							<td></td>
							<td><b>Total price</b></td>
							<td><b>$ {this.totalPrice.toFixed(2)}</b></td>
						</tr>
					</tfoot>
				</table>
      </div>
    );
  }
}
 
export default Basket;