import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../Assets/Images/login-bg.jpg'
import auth from '../../Firebase/Firebase.init';
import useToken from '../../Hooks/useToken';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';
import SocialLogin from './SocialLogin';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user)

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
    }

    useEffect(() => {
        if (token) {
            toast.success('Successfully login', { id: 'success' })
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])
    if (error) {
        toast.error(error.message, { id: 'error' })

    }
    if (loading) {
        return <AtomSpinner />
    }

    return (
        <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0">

            </div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        {/* <img src="" className="mb-3"> */}
                        <h1 className="mb-3 font-bold text-5xl">Hi 👋 Welcome To Cisco. </h1>
                        <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>
                <div className="flex justify-center self-center  z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                            <p className="text-gray-500">Please sign up to your account.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-5">
                                <div className="">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Name</label>
                                    <input
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Name is required"
                                            }
                                        })}
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" placeholder="Your Name" />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                    </label>
                                </div>
                                <div className="">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: "Email must be valid"
                                            }
                                        })}
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    </label>
                                </div>
                                <div className="">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters or longer'
                                            }
                                        }
                                        )}
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>

                                <small>Already have an account?<Link className='text-green-400 hover:text-green-500' to='/login'>Login Now</Link></small>
                                <div>
                                    <input type="submit" value='Sign Up' className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3 rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" />
                                </div>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;