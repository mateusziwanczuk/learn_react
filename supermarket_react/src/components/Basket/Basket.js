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
				<div className="basket__container_table">
					<table>
						<thead>
							<tr>
								<th>Product</th>
								<th>Qty</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{localStorage.getItem("basketProducts") !== null ?
									this.state.basketProducts.map((product, i) => {
										return (
											<tr key={product.title}>
													<td>{product.title}</td>
													<td className="table__center__content">1</td>
													<td className="table__center__content">$ {product.price}</td>
											</tr>
										);
									}) : null
								}
						</tbody>
						<tfoot>
							<tr>
								<td>Total price</td>
								<td></td>
								<td className="table__center__content">$ {this.totalPrice.toFixed(2)}</td>
							</tr>
						</tfoot>
					</table>
				</div>
      </div>
    );
  }
}
 
export default Basket;