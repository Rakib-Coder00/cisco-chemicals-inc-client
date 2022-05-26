import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorage_key = '9b47beae072ecfbfc4906dfdd906ab0e'


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const addProduct = {
                        name: data.name,
                        email: data.email,
                        // product: data.product,
                        // max_quantity: data.max_quantity,
                        // min_quantity: data.min_quantity,
                        price: data.price,
                        picture: img,
                        description: data.description,
                    }
                    //send to database=>
                    fetch('https://shrouded-gorge-86045.herokuapp.com/product', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(addProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully');
                                reset()
                            }
                            else {
                                toast.error('Product not added');
                            }
                        })
                }
            })
    }

    // if (isLoading) {
    //     return <Spinner />
    // }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Add Your Desire Product!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">


                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>



                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Email must be valid"
                                    }
                                })} type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input {...register("price", {
                                    required: {
                                        value: true,
                                        message: "Price is required"
                                    }
                                })} type="number" placeholder="Product Price" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}

                                </label>


                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea {...register("description")} className="textarea textarea-bordered"></textarea>

                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input {...register("image", {
                                    required: {
                                        value: true,
                                        message: "Image is required"
                                    }
                                })} type="file" placeholder="Your Photo" className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                                </label>
                            </div>

                            <input type="submit" value='Add' className="btn btn-outline btn-primary w-full max-w-xs mt-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;