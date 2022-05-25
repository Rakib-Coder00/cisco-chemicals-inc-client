import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';

const ManageAllProduct = () => {
    // const [allProducts, setAllProducts] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/product')
    //         .then(res => res.json())
    //         .then(data => setAllProducts(data))
    // }, [])

    const { data: allProducts, isLoading, refetch } = useQuery('allProducts', () => fetch('http://localhost:5000/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <AtomSpinner />
    }

    const handleDelete = (id) => {
        const proceedConfirmation = window.confirm('Are you sure you want to delete this order?')
        if (proceedConfirmation) {
            fetch(`http://localhost:5000/product/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        toast.success('Item Deleted successfully', { "id": 'deleted' })
                        refetch()
                    }
                })
        }
        else {
            toast.error('Action Cancelled', { "id": 'cancelled' })
        }
    }
    return (
        <div class="overflow-x-auto">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th>sl/n</th>
                        <th>Avatar</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProducts.map((product, index) => (
                            <tr key={product._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div class="avatar">
                                        <div class="w-14 mask mask-squircle">
                                            <img src={product.picture} alt='avatar' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.product}</td>
                                <td>{product.price}</td>
                                <td>{product.max_quantity}</td>
                                <td><button onClick={()=>handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ManageAllProduct;