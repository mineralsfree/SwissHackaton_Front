import { Navigate, Outlet} from "react-router-dom";
import {useAuth} from "./AuthContext";
import {BottomNavBar} from "../components/BottomNavBar/BottomNavBar";

export const ProtectedLayout = () => {
    const {user}= useAuth();
    console.log(user);

    if (!user) {
        return <Navigate to="/login"/>;
    }

    return (
        <div>
            <Outlet/>
            <BottomNavBar/>
        </div>
    )
};