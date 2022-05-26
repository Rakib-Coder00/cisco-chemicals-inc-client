import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import toast from 'react-hot-toast';


const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, navigate])

    const handleDelete = (id) => {
        const proceedConfirmation = window.confirm('Are you sure you want to delete this order?')
        if (proceedConfirmation) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    const remainingItems = orders.filter(service => service._id !== id)
                    setOrders(remainingItems)
                })
            toast.success('Item Deleted successfully', { "id": 'deleted' })
        }
        else {
            toast.error('Action Cancelled', { "id": 'cancelled' })
        }
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL/n</th>
                            <th>Avatar</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {orders.map((order, index) => (<tr key={order._id}>
                            <th>{index + 1}</th>
                            <td><div class="avatar">
                                <div class="w-14 mask mask-squircle">
                                    <img src={order.picture} alt='avatar' />
                                </div>
                            </div></td>
                            <td>{order.product}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-xs btn-secondary'>Pay Now</Link>}
                                {(order.price && order.paid) && <span className='text-error'>Paid!</span>}
                            </td>
                            <td>
                                {(order.price && !order.paid) ? <button onClick={() => handleDelete(order._id)} className='btn btn-xs btn-error hover:bg-red-600 '>Delete</button>:<span className='text-error'>Processing!</span>}
                            </td>
                        </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;