import {Outlet} from 'react-router-dom';

import {BottomNavBar} from "../components/BottomNavBar/BottomNavBar";

export default function Root() {
    return (
        <>
            <Outlet/>
            <BottomNavBar/>
        </>
    );
}