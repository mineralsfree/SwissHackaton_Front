import {Navigate, Outlet} from "react-router-dom";
import {AuthProvider, useAuth} from "./AuthContext";
import React from "react";

export const HomeLayout = () => {
    const user = useAuth();
    if (user) {
        return <Navigate to="/dashboard/user"/>;
    }

    return (
        <div>
            <AuthProvider>
                <Outlet/>
            </AuthProvider>
        </div>
    )
};