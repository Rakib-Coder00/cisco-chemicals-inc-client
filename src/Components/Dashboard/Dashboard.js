import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li><NavLink to='/dashboard/review'>My Review</NavLink></li>
                    <li><NavLink to='/dashboard/history'>My History</NavLink></li>
                    {/* <li><Link to='/dashboard/history'>My History</Link></li> */}
                    {/* {admin && <>
                        <li><Link to='/dashboard/users'>All users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add a Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
                    </>
                    } */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;