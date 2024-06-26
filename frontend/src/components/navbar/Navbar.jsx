import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const navigate = useNavigate()
    const { authentication, cart } = useSelector(store => store)

    const handleAvatarClick = () => authentication.user?.role === "ROLE_CUSTOMER" ? navigate("/my-profile") : navigate("/admin/restaurant")

    return (
        <Box bgcolor="secondary.main" className='px-5 sticky top-0 z-50 py-[.8rem] lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li
                    onClick={() => navigate("/")}
                    className='logo font-semibold text-gray-300 text-2xl first-letter:text-red-600 first-letter:text-[30px] list-none'
                >
                    foodify
                </li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className="">
                    <IconButton onClick={() => console.log("search icon clicked")}>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div className="">
                    {
                        authentication.user ?
                            (
                                <Avatar
                                    onClick={handleAvatarClick}
                                    sx={{ backgroundColor: "white", color: "black" }}
                                >
                                    {authentication.user?.fullName[0].toUpperCase()}
                                </Avatar>
                            ) :
                            (
                                <IconButton onClick={() => navigate("/account/login")}><PersonIcon /></IconButton>
                            )
                    }
                </div>
                <div className="">
                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge color='primary' badgeContent={cart.cartItems.length}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}

export default Navbar
