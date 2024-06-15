import React from 'react'
import { Divider, Drawer, useMediaQuery } from '@mui/material'
import { menu } from './MenuItems'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../../../redux/authentication/Action'

const AdminSideBar = ({ handleClose }) => {

    const isSmallScreen = useMediaQuery("(max-width:1080px)")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`)
        if (item.title === "Logout") {
            dispatch(logoutAction({ navigate }))
            handleClose()
        }
    }

    return (
        <div>
            <>
                <Drawer
                    variant={isSmallScreen ? "temporary" : "permanent"}
                    open={true}
                    onClose={handleClose}
                    anchor='left'
                    sx={{ zIndex: 1 }}
                >
                    <div className="w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]">
                        {
                            menu.map((item, i) =>
                                <React.Fragment key={i}>
                                    <div onClick={() => handleNavigate(item)} className='px-5 flex items-center gap-5 cursor-pointer'>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                    {i !== menu.length - 1 && <Divider />}
                                </React.Fragment>
                            )
                        }
                    </div>
                </Drawer>
            </>
        </div>
    )
}

export default AdminSideBar
