import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import PageTitle from '../Shared/PageTitle';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <PageTitle title='Dashboard' />
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-2xl font-bold text-purple-500">Your Dashboard</h2>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><NavLink to='/dashboard'>My Product</NavLink></li>
                    <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/orders'>My Orders</NavLink></li>
                    {!admin && <>
                        <li><NavLink to='/dashboard/review'>Add Review</NavLink></li>
                    </>
                    }
                    {admin && <>
                        <li><NavLink to='/dashboard/users'>All Users</NavLink></li>
                        <li><NavLink to='/dashboard/addProduct'>Add Product</NavLink></li>
                        <li><NavLink to='/dashboard/manageProduct'>Manage All Product</NavLink></li>
                    </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;