import React from 'react'
import './Market.css'

const MarketProducts = props => {
    const {products} = props;
    return(
        <div className="market__product__container">
            {products.map(product => (
            <div className="market__product">
                <img src='' alt='product photo' />
                <div className="market__product__info">
                    <p>{product.title}</p>
                    <p>Price: {product.price} USD</p>
                </div>
            </div>

            ))}


        </div>
    )
}

export default MarketProducts; 

        {/* <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key = {Math.random()}>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                    </tr>
                ))}
            </tbody>
        </table> */}