import React, { useContext } from 'react';
import { Link, Navigate, NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const NavBar = () => {
    const { userInfo, logout, loading } = useContext(AuthContext);
    const links = <>
        <li><Link to='/' className='mr-1.5'>Home</Link></li>

        {
            userInfo && <>
                <li><Link to='/myapplications' className='mr-1.5'>My Applications</Link></li>
            </>
        }

        {/* For recruiter */}
        {
            userInfo && <>
            <li><Link to='/addjobs' className='mr-1.5'>Add Jobs</Link></li>
            <li><Link to='/mypostedjobs' className='mr-1.5'>Posted Jobs</Link></li>
            </>
        }
    </>

    const handleLogout = async () => {
        await logout();
        Navigate('/login');
    };

    if (loading) {
        return (
            <div className='w-full m-auto text-center flex justify-center items-center min-h-screen'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center space-x-2">
                {/* Theme toggle button */}


                {userInfo ? (
                    <>
                        <NavLink onClick={handleLogout} className="btn mr-2">Logout</NavLink>
                        <img
                            className="h-11 w-11 rounded-full lg:group hover:cursor-pointer"
                            src={userInfo.photoURL}
                            alt=""
                            title={userInfo.displayName}
                        />
                        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-black text-white text-sm rounded-md p-1 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 hidden lg:block">
                            {userInfo.displayName}
                        </div>
                    </>
                ) : (
                    <>
                        <NavLink to="/registration" className="btn mr-4">Registration</NavLink>
                        <NavLink to='/login' className="btn">Login</NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;