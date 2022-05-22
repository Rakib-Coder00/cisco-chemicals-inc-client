import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import img from '../../Assets/Images/login-bg.jpg'
import auth from './../../Firebase/Firebase.init';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data);
    }

    if (user) {
        toast.success('Successfully login', { id: 'success' })
        navigate(from, { replace: true })
      }
      if (error) {
        toast.error(error.message, { id: 'error' })
    
      }
      if (loading) {
        return  <AtomSpinner/>
      }

    return (
        // < !--component -- >
        <div class="bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${img})` }}>
            <div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0">

            </div>
            <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                    <div class="self-start hidden lg:flex flex-col  text-white">
                        {/* <img src="" class="mb-3"> */}
                        <h1 class="mb-3 font-bold text-5xl">Hi 👋 Welcome Back.</h1>
                        <p class="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                            and publishing industries for previewing layouts and visual mockups</p>
                    </div>
                </div>
                <div class="flex justify-center self-center  z-10">
                    <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
                        <div class="mb-4">
                            <h3 class="font-semibold text-2xl text-gray-800">Sign In </h3>
                            <p class="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="space-y-5">
                                <div class="space-y-2">
                                    <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
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
                                        class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="mail@gmail.com" />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    </label>
                                </div>
                                <div class="space-y-2">
                                    <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
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
                                        class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="" placeholder="Enter your password" />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div class="text-sm">
                                        <Link to='/' class="text-green-400 hover:text-green-500">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                                
                                
                                <small>Don't have account?<Link className='text-green-400 hover:text-green-500' to='/signup'>Create an Account</Link></small>
                                <div>
                                    <input type="submit" value='Login' class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-md tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500" />
                                </div>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;