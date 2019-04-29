import React from 'react';
import { Redirect } from 'react-router-dom';
import './Basket.css';

class Basket extends React.Component {
  state = {
		basketProducts: JSON.parse(localStorage.getItem('basketProducts')),
		redirect: false
	};

	getProductsFromLS = () => {
		return JSON.parse(localStorage.getItem('basketProducts'))
	}

	totalPrice = this.state.basketProducts !== null ? 
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
				<div className="basket__container__table">
					<table>
						<thead>
							<tr>
								<th>Product</th>
								<th>Qty</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{this.getProductsFromLS !== null ?
									this.state.basketProducts.map((product) => {
										return (
											<tr key={product.title}>
													<td>
														<span className="basket__delete__product" 
															onClick={() => {
																let basketProducts = this.state.basketProducts.filter(
																	basketProduct => basketProduct.id !== product.id
																)
																localStorage.setItem('basketProducts', JSON.stringify(basketProducts))
																this.getProductsFromLS();
																this.setState({basketProducts})
																console.log(basketProducts)
																console.log(this.state.basketProducts)
															}}>
															✘
														</span>
														{product.title}
													</td>
													<td className="table__center__content">
														<span className="basket__product__quantity__button" id="product.id">-</span>
														<span className="basket__product__quantity" id="product.id">1</span>
														<span className="basket__product__quantity__button" id="product.id">+</span>
													</td>
													<td className="table__center__content">$ {product.price.toFixed(2)}</td>
											</tr>
										);
									}) 
								: <br/>
							}
						</tbody>
						<tfoot>
							<tr>
								<td></td>
								<td>Total price</td>
								{this.getProductsFromLS !== null 
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