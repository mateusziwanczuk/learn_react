import React from 'react'
import './Market.css'

const MarketProducts = props => {
    const {products} = props;
    return(
        <div className="market__product__container">
            {products.map(product => (
            <div className="market__product">
                <img src={product.image} alt='product photo' />
                <div className="market__product__info">
                    <p>{product.title}</p>
                    <p>Price: {product.price} $</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default MarketProducts; 
