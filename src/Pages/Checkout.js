import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import AtomSpinner from './../Components/Shared/AtomSpinner/AtomSpinner';
import OrderModal from './OrderModal';

const Checkout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth)
    const [orderModal, setOrderModal] = useState(null)

    // const { data: product, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:5000/product/${id}`))
    //     .then(res => res.json())

    //     if (isLoading) {
    //         return <AtomSpinner />
    //     }

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
                        <span>Available Quantity : {product.max_quantity}</span> <br />
                        <span>Minium Quantity : {product.min_quantity}</span>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <label for="order-modal" class="btn modal-button btn-primary">Checkout</label>
                    </div>
                </div>
            </div>
             <OrderModal product={product}  setOrderModal={ setOrderModal} />
        </div>
    );
};

export default Checkout;