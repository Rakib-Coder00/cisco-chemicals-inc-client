import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, product])

    return (
        <div>

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={product.picture} class="max-w-sm rounded-lg shadow-2xl" alt='img-' />
                    <div>
                        <h1 class="text-5xl font-bold">{product.name}</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;