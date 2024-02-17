import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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

export default PrivateRoute;
