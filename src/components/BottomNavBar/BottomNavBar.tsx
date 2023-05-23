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
        <BottomNavigationAction value={'/user'} component={Link} to={'/user'} label="Moje konto"
                                icon={<AccountCircleIcon/>}/>
        <BottomNavigationAction value={'trash'} component={Link} to={'/trash'} label="Skanuje smiecie"
                                icon={<CropFreeIcon/>}/>
        <BottomNavigationAction value={'/stats'} component={Link} to={'/stats'} label="Statystyki"
                                icon={<LeaderboardIcon/>}/>
    </BottomNavigation>)
}