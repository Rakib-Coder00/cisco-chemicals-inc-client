import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useQuery } from 'react-query';

const Products = () => {
    const [products, setProducts] = useState([])

    // const { data: services, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/product'))
    // .then(res => res.json())

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="">
            <h4 className='text-xl text-center text-secondary'>Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
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