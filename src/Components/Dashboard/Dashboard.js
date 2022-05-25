import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className="text-2xl font-bold text-purple-500">Your Dashboard</h2>
                <Outlet />
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/dashboard'>My Product</NavLink></li>
                    <li><NavLink to='/dashboard/orders'>My Orders</NavLink></li>
                    { !admin && <>
                        <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
                        <li><NavLink to='/dashboard/review'>Add Review</NavLink></li>
                        </>
                    }
                    {/* <li><Link to='/dashboard/history'>My History</Link></li> */}
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