import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutAction } from '../../redux/authentication/Action';

const UserProfile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => dispatch(logoutAction({ navigate }))

    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className="flex flex-col items-center justify-center">
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl font-semibold'>Magret</h1>
                <p>magret@gmail.com</p>
                <Button variant='contained' onClick={handleLogout} sx={{ margin: "2rem 0rem" }}>Logout</Button>
            </div>
        </div>
    )
}

export default UserProfile
