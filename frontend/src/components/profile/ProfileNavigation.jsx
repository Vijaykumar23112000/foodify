import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../redux/authentication/Action';

const ProfileNavigation = ({ open, handleClose }) => {

    const menu = [
        { title: "Orders", icon: <ShoppingBagIcon /> },
        { title: "Favorites", icon: <FavoriteIcon /> },
        { title: "Address", icon: <HomeIcon /> },
        { title: "Payment", icon: <AccountBalanceWalletIcon /> },
        { title: "Notification", icon: <NotificationsActiveIcon /> },
        { title: "Events", icon: <EventIcon /> },
        { title: "Logout", icon: <LogoutIcon /> },
    ]

    const isSmallScreen = useMediaQuery('(max-width:900px)')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = item => {
        item.title === "Logout" ? dispatch(logoutAction()) : navigate(`/my-profile/${item.title.toLowerCase()}`)
        navigate("/")
    }
    return (
        <div>
            <Drawer
                onClose={handleClose}
                anchor='left'
                open={isSmallScreen ? open : true}
                sx={{ zIndex: -1, position: "sticky" }}
                variant={isSmallScreen ? "temporary" : "permanent"}
            >
                <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-5 pt-16">
                    {
                        menu.map((item, i) =>
                            <>
                                <div onClick={() => handleNavigate(item)} className='px-5 flec items-center space-x-5 cursor-pointer'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {
                                    i !== menu.length - 1 && <Divider />
                                }
                            </>
                        )
                    }
                </div>
            </Drawer>
        </div>
    )
}

export default ProfileNavigation
