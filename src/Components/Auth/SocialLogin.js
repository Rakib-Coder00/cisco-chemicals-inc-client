import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import BtnSpinner from '../Shared/BtnSpinner';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        toast.success('Successfully login', { id: 'success' })
        navigate(from, { replace: true })
    }
    if (error) {
        toast.error(error.message, { id: 'err' })
    }
    if (loading) {
        return <BtnSpinner/>
    }
    return (
        <>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline bg-green-400  hover:bg-green-500 text-gray-100 w-full max-w-xs mt-3">Continue With google</button>
        </>
    );
};

export default SocialLogin;