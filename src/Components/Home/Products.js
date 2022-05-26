import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('https://shrouded-gorge-86045.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="mt-24">
            <h4 className='text-4xl text-center text-primary font-bold'>Our Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-24 mt-14'>
                {
                    products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Products;