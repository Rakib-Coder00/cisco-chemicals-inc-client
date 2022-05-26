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
            fetch(`https://shrouded-gorge-86045.herokuapp.com/order?email=${user.email}`, {
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
        fetch(`https://shrouded-gorge-86045.herokuapp.com/order/${id}`, {
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

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            <td><div className="avatar">
                                <div className="w-14 mask mask-squircle">
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
                                {(order.price && !order.paid) ? <label htmlFor="confirm-modal" className="btn modal-button  btn-xs btn-error">Cancel</label> : <span className='text-error'>Processing!</span>}

                            </td>
                            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg mb-8">Are you sure to cancel this order?</h3>
                                    <button onClick={() => handleDelete(order._id)} className='btn btn-error hover:bg-red-600 btn-sm'>Yes</button>
                                    <label htmlFor="confirm-modal" className="btn btn-sm btn-success ml-4">No</label>
                                </div>
                            </div>
                        </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;