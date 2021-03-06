import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://shrouded-gorge-86045.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('failed to make an admin');
                    refetch();
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success('User is now an Admin')
                }
                else {
                    toast.error('Error Occurred')
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <button className="btn btn-xs">Remove As Admin</button>}</td>
            {/* <td><button className="btn btn-xs">Remove User</button></td> */}
        </tr>
    );
};

export default UserRow;