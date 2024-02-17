import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavigation from './SideNavigation';
// import Home from '../components/Home';
// import Dashboard from '../components/Dashboard';
// import Profile from '../components/Profile';
// import NotFound from '../components/NotFound';
import Login from "../components/auth/Login";

const MainLayout = () => {
    return (
        <div>
            <SideNavigation />
            <div className="content">
                <Routes>
                    <Route index element={<Login />} />
                    {/*<Route index element={<Home />} />*/}
                    {/*<Route path="dashboard" element={<Dashboard />} />*/}
                    {/*<Route path="profile" element={<Profile />} />*/}

                    {/*<Route path="not-found" element={<NotFound />} />*/}
                </Routes>
            </div>
        </div>
    );
}

export default MainLayout;
