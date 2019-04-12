import React from 'react'

const MarketProducts = props => {
    const {products} = props;
    return(
        <table>
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
        </table>
    )
}

export default MarketProducts; 
