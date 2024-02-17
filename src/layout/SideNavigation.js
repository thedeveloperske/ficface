import React from 'react';
import { Link } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}

export default SideNavigation;
