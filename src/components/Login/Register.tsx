import React, {useState} from 'react';
import {
    Container,
    Typography,
    TextField,
    Button,
} from '@mui/material';
import { AuthProvider } from '../../contexts/AuthContext';
import {useNavigate} from "react-router-dom";

const RegisterPage = (props) => {
    const {login} = props;
    // const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleEmailChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRegister = async () => {

        try {
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                // Assuming the server returns a token or user object upon successful authentication
                // Modify the login function in the AuthProvider to store the user data or token
                // login(data);
                navigate('/login');
            } else {
                // Handle authentication error, e.g., display an error message
                console.log('Authentication failed');
            }
        } catch (error) {
        }
    }
    return (
        <Container maxWidth="xs" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '64px',
        }}>
            <Typography variant="h5" component="h1" sx={{marginBottom: '32px'}}>
                REGISTER
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{marginBottom: '16px'}}
                value={username}
                onChange={handleEmailChange}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{marginBottom: '16px'}}
                value={password}
                onChange={handlePasswordChange}
            />
            <Button
                sx={{marginBottom: '32px'}}
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleRegister}
            >
                Register Account
            </Button>
        </Container>
    );
};
const RegisterPageWithAuthProvider = () => (
    <AuthProvider>
        <RegisterPage />
    </AuthProvider>
);

export default RegisterPageWithAuthProvider;
