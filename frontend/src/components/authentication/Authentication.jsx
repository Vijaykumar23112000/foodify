import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

const Authentication = () => {
    
    const location = useLocation()
    const navigate = useNavigate()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outline: "none",
    };

    const handleOnClose = () => {
        navigate("/")
    }

    return (
        <>
            <Modal
                open={
                    location.pathname === "/account/register" || location.pathname === "/account/login"
                }
                onClose={handleOnClose}
            >   
                <Box sx={style}>
                    {
                       location.pathname === "/account/register" ? <RegistrationForm /> : <LoginForm /> 
                    }
                </Box>
            </Modal>
        </>
    )
}

export default Authentication
