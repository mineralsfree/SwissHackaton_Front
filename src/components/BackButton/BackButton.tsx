import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import {ArrowBack} from "@mui/icons-material";
const BackButton = () => {
    const history = useNavigate();

    const handleGoBack = () => {
        history(-1);
    };

    return (
        <Button
            sx={{   position: 'sticky',
                top: 2,
                left: 2,
                zIndex: 9999,}}
            variant="contained"
            color="info"
            startIcon={<ArrowBack />}
            onClick={handleGoBack}
        >
            Powrót
        </Button>
    );
};

export default BackButton;
