import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./navbar.css"

const Navbar = () => {

    return (
        <div className='px-5 z-50 py-[.8rem] bg-[#5A20CB] lg:px-20 flex justify-between'>
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <li className='logo font-semibold 
                            text-gray-300 text-2xl
                            first-letter:text-red-600 
                            first-letter:text-[30px]'
                >foodify</li>
            </div>
            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div className="">
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </div>
                <div className="">
                    <Avatar sx={{ backgroundColor: "white", color: "black" }}>A</Avatar>
                </div>
                <div className="">
                    <IconButton>
                        <Badge color='primary' badgeContent={2}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Navbar
