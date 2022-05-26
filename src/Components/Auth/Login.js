import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import img from '../../Assets/Images/login-bg.jpg'
import auth from './../../Firebase/Firebase.init';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';
import SocialLogin from './SocialLogin';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const sendMail = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (/^\S+@\S+\.\S+$/.test(email)) {
            sendPasswordResetEmail(email)
            toast.success('Email sent successfully');
        }
        else {
            toast.error('Please enter a valid email address');
        }
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }
    const [token] = useToken(user)

    if (token) {
        toast.success('Successfully login', { id: 'success' })
        navigate(from, { replace: true })
    }
    if (error) {
        toast.error(error.message, { id: 'error' })

    }
    if (loading) {
        return <AtomSpinner />
    }

    return (
        <div className="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute bg-gradient-to-b from-green-500 to-green-400  opacity-0 lg:opacity-75 inset-0 z-0">

            </div>
            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div className="self-start hidden lg:flex flex-col  text-white">
                        <h1 className="mb-3 font-bold text-5xl">Hi 👋 Welcome Back.</h1>
                        <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>
                <div className="flex justify-center self-center  z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-5">
                                <div className="space-y-2">
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
                                <div className="space-y-2">
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
                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <label htmlFor="forgot-modal" className="modal-button text-green-400 hover:text-green-500 cursor-pointer">Forgot password?</label>
                                    </div>
                                </div>
                                <small>Don't have account?<Link className='text-green-400 hover:text-green-500' to='/signup'>Create an Account</Link></small>
                                <div>
                                    <input type="submit" value='Login' className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" />
                                </div>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin />
                    </div>
                </div>
            </div>
            <input type="checkbox" id="forgot-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="forgot-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={sendMail}>
                        <p>Enter Your Email:</p>
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input className="btn btn-primary ml-5" type="submit" value="send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;