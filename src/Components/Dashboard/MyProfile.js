import React, { useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    // const [profile, setProfile] = useState({})

    // useEffect(() => {
    //   fetch(`http://localhost:5000/user/${user.email}`, {
    //       method: 'GET',
    //       headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         setProfile(data)
    //     })
    // }, [])


    const url = `http://localhost:5000/user/${user.email}`;
    const { data: appointment, isLoading, refetch, reset } = useQuery(['Profile', user.email], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <AtomSpinner />
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse mb-80">
                
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="avatar px-32 pt-10">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='avatar' />
                        </div>
                    </div>
                    <div class="card-body">
                        <h2 class="card-title text-left">Name: {user.displayName}</h2>
                        <h2 class="card-title text-left">Email: {appointment.email}</h2>
                        <h2 class="card-title text-left">Address: {appointment.address}</h2>
                        <h2 class="card-title text-left">Education: {appointment.education}</h2>
                        {/* <h2 class="card-title text-left">Address: {appointment.address}</h2> */}
                        <h2 class="card-title text-left">Phone Number: {appointment.phone}</h2>
                        <h2 class="card-title text-left">Linkedin Profile: {appointment.linkedin}</h2>
                        <div class="card-actions">
                            {/* <button class="btn btn-primary">Edit Profile</button> */}
                            <label for="update-modal" class="btn btn-primary modal-button">Edit Profile</label>
                        </div>
                    </div>
                </div>
                <UpdateProfile user={user} refetch={refetch} reset={reset}/>
            </div>
        </div>
    );
};

export default MyProfile;