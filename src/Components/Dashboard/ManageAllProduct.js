import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';

const ManageAllProduct = () => {
    // const [allProducts, setAllProducts] = useState([])
    // useEffect(() => {
    //     fetch('https://shrouded-gorge-86045.herokuapp.com/product')
    //         .then(res => res.json())
    //         .then(data => setAllProducts(data))
    // }, [])

    const { data: allProducts, isLoading, refetch } = useQuery('allProducts', () => fetch('https://shrouded-gorge-86045.herokuapp.com/product', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));
    if (isLoading) {
        return <AtomSpinner />
    }

    const handleDelete = (id) => {
        fetch(`https://shrouded-gorge-86045.herokuapp.com/product/${id}`, {
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
    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
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
                                    <div className="avatar">
                                        <div className="w-14 mask mask-squircle">
                                            <img src={product.picture} alt='avatar' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.product}</td>
                                <td>{product.price}</td>
                                <td>{product.max_quantity}</td>
                                <td><label htmlFor="product-modal" className="btn modal-button  btn-xs btn-error">Delete</label>
                                    {/* <button  className='btn btn-xs btn-error'>Delete</button> */}
                                </td>
                                <input type="checkbox" id="product-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg mb-8">Are you sure to delete this product?</h3>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-error hover:bg-red-600 btn-sm'>Yes</button>
                                        <label htmlFor="product-modal" className="btn btn-sm btn-success ml-4">No</label>
                                    </div>
                                </div>
                            </tr>
                        ))

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