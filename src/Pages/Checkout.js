import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';

const Checkout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [user] = useAuthState(auth)
    // const [order, setOrder] = useState(null)
    const handleOrder = (e) => {
        e.preventDefault();
        const order = {
            user: user.displayName,
            email: user.email,
            product: product.name,
            price: product.price,
            productId: product._id,
            phone: e.target.phone.value,
            quantity: e.target.quantity.value,
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(`Booking Successful`)
                }
                else {
                    toast.error(`Booking Failed`)
                }
                // refetch()
                // to close modal ==>
                // setProduct(null)
            })
    }

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
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{user?.displayName}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' value={product.min_quantity} placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Contact Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Proceed" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;