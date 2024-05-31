import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <Box bgcolor="secondary.main" className='px-5 sticky top-0 z-50 py-[.8rem] lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li className='logo font-semibold 
                            text-gray-300 text-2xl
                            first-letter:text-red-600 
                            first-letter:text-[30px]
                            list-none'
                >
                    foodify
                </li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className="">
                    <IconButton onClick={() => console.log("Search Icon Clicked")}>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div className="">
                    {
                        false ? 
                            <Avatar sx={{ backgroundColor: "white", color: "black" }}>A</Avatar> : 
                            <IconButton onClick={()=>navigate("/account/login")}><PersonIcon /></IconButton>
                    }
                </div>
                <div className="">
                    <IconButton>
                        <Badge color='primary' badgeContent={2}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </Box>
    )
}

export default Navbar
