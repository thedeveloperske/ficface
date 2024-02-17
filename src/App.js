import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import Profile from './components/Profile';
// import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={<MainLayout />}/>
                {/*    <Route index element={<Home />} />*/}
                {/*    <PrivateRoute path="dashboard" element={<Dashboard />} />*/}
                {/*    <PrivateRoute path="profile" element={<Profile />} />*/}
                {/*    /!* Add other routes as needed *!/*/}
                {/*</Route>*/}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </Router>
    );
}

const Login = () => {
    // Implement your login logic here
    return <div>Login Page</div>;
};

const PrivateRoute = ({ element: Element, ...rest }) => {
    // Implement your authentication logic using JWT here
    // For example, check if the user is authenticated, if not, navigate to login
    const isAuthenticated = false; // Replace with your authentication logic

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default App;
