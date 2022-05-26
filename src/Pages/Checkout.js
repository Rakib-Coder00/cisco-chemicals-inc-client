import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import OrderModal from './OrderModal';

const Checkout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth)
    const [orderModal, setOrderModal] = useState(false)




    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id, product])

    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={product.picture} className="max-w-sm rounded-lg shadow-2xl" alt='img-' />
                    <div>
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <span>Available Quantity : {product.max_quantity}</span> <br />
                        <span>Minium Quantity : {product.min_quantity}</span>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <label htmlFor="order-modal" className="btn modal-button btn-primary">Checkout</label>
                    </div>
                </div>
            </div>
            <OrderModal product={product} />
        </div>
    );
};

export default Checkout;