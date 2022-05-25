import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../Firebase/Firebase.init';

const OrderModal = ({ product, setOrder }) => {
    const [user] = useAuthState(auth)


    const onSubmit = e => {
        e.preventDefault();
        const quantity = e.target.quantity.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        console.log(quantity, address, phone);
        const order = {
            user: user.displayName,
            email: user.email,
            product: product.name,
            price: product.price,
            quantity: quantity,
            address: address,
        }
        if (quantity > product.max_quantity || quantity < product.min_quantity) {
            return toast.error(`Quantity should be between ${product.min_quantity} and ${product.max_quantity}`)
        }
        else {
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
                        toast.success('Order Placed Successfully');
                    }
                    else {
                        toast.error(`Booking Failed`)
                    }
                    // refetch()
                    // to close modal ==>
                    // setProduct(null)
                })
        }



    }
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{user?.displayName}</h3>
                    <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='quantity' placeholder={product.min_quantity} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Contact Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Proceed" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;