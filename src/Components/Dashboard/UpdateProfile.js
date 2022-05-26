import React from 'react';
import toast from 'react-hot-toast';

const UpdateProfile = ({ user, refetch, reset }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const address = e.target.address.value;
        const education = e.target.education.value;
        const linkedin = e.target.linkedin.value;

        const profile = {
            phone: phone,
            address: address,
            education: education,
            linkedin: linkedin,
        }

        fetch(`https://shrouded-gorge-86045.herokuapp.com/user/${user.email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(updated => {
                if (updated.modifiedCount) {
                    toast.success('Profile updated successfully');
                    refetch()
                    reset()
                }
                else {
                    toast.error('Profile not updated');
                }
            })

    }
    return (
        <div>
            <input type="checkbox" id="update-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="update-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
                    <form onSubmit={onSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='education' placeholder='Education' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='linkedin' placeholder='Linkedin' className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Contact Number" className="input input-bordered w-full max-w-xs" />
                        {/* <input type="file" name='avatar' placeholder="Avatar" className="input input-bordered w-full max-w-xs" /> */}
                        <input type="submit" value="Update" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateProfile;