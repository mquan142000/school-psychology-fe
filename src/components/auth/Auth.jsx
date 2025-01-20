import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Modal} from "@mui/material";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnClose = () => {
        navigate("/")
    }
    return (
        <>
            <Modal onClose={handleOnClose} open={
                location.pathname === "/account/register"
                || location.pathname === "/account/login"
            } children={}>
            </Modal>
        </>
    )
}

export default Auth;