import {Link} from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CropFreeIcon from '@mui/icons-material/CropFree';
import {useState} from "react";

export const BottomNavBar = () => {
    const pathname = window.location.pathname; // in case user visits the path directly. The BottomNavBar is able to follow suit.
    const [value, setValue] = useState(pathname);
    // const [value, setValue] = React.useState(pathname);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#fff', // Customize the background color if needed
        }}
    >
        <BottomNavigationAction value={'dashboard/user'} component={Link} to={'/dashboard/user'} label="Moje konto"
                                icon={<AccountCircleIcon/>}/>
        <BottomNavigationAction value={'dashboard/trash'} component={Link} to={'/dashboard/trash'} label="Skanuj śmieci"
                                icon={<CropFreeIcon/>}/>
        <BottomNavigationAction value={'dashboard/stats'} component={Link} to={'/dashboard/stats'} label="Statystyki miejskie"
                                icon={<LeaderboardIcon/>}/>
    </BottomNavigation>)
}