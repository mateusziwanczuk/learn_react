import React from 'react';
import { Redirect } from 'react-router-dom';
import './Basket.css';

class Basket extends React.Component {
  state = {
		basketProducts: JSON.parse(localStorage.getItem('basketProducts')),
		redirect: false
	};

	totalPrice = localStorage.getItem("basketProducts") !== null ? 
		this.state.basketProducts
		.map(basketProduct => basketProduct.price)
		.reduce((a,b) => a + b)
		: null

	setRedirect = () => {
		this.setState({
			redirect: true
		})
	}

	renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/summary-order' />
    }
	}
	
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
													<td className="table__center__content">$ {product.price.toFixed(2)}</td>
											</tr>
										);
									}) 
									: <br/>
								}
						</tbody>
						<tfoot>
							<tr>
								<td>Total price</td>
								<td></td>
								{localStorage.getItem("basketProducts") !== null 
								? <td className="table__center__content">$ {this.totalPrice.toFixed(2)}</td>
								: <td className="table__center__content">$ 0.00</td>}
							</tr>
						</tfoot>
					</table>
				</div>
				<div className="basket__container__button">
					{this.renderRedirect()}
					<span onClick={this.setRedirect}>Summary the order</span>
					{/* Component menu color doesn't change when redirected. */}
				</div>
      </div>
    );
  }
}
 
export default Basket;