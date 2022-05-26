import React from 'react';
import { useQuery } from 'react-query';
import AtomSpinner from '../Shared/AtomSpinner/AtomSpinner';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://shrouded-gorge-86045.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <AtomSpinner />
    }
    return (
        <div>
            <h2 className='text-2xl'>All User : {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL/no</th>
                            <th>Email</th>
                            <th>Status</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => <UserRow key={user._id} user={user} index={index} refetch={refetch} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;