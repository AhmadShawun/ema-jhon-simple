import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    
    const handleAddToCart=(product)=>{
        console.log(product)
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;