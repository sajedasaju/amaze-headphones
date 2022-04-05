import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex justify-center md:flex-row sm:flex-col text-2xl font-bold  font-mono py-4 '>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/home'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/reviews'>Reviews</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/dashboard'>DashBoard</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to='/about'>About</NavLink>
        </nav>
    );
};

export default Header;