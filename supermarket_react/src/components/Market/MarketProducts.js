import React from 'react'
import { shoppingCart } from "react-icons-kit/fa/shoppingCart";
import { Icon as BaseIcon } from "react-icons-kit";
import styled from "styled-components";
import './Market.css'

const Icon = props => <BaseIcon size={30} icon={props.icon} />;
const IconCnt = styled.div`
	display: flex;
	justify-content: center;
`;

const MarketProducts = props => {
    const {products} = props;
    return(
        <div className="market__product__container">
            {products.map(product => (
            <div className="market__product" key={product.title}>
                <img src={product.image} alt={product.image} />
                <div className="market__product__info">
                    <IconCnt>
						<Icon icon={shoppingCart} />
					</IconCnt>
                    <p>{product.title}</p>
                    <p>Price: {product.price} $</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default MarketProducts; 
