import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsOrderAction, updateRestaurantOrderStatusAction } from '../../../../redux/restaurantOrder/Action';
import { orderStatus } from './OrderStatus';

const OrderTable = () => {

    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { restaurant, restaurantOrder } = useSelector(store => store)
    const restaurantId = restaurant.usersRestaurant?.id

    useEffect(() => {
        dispatch(fetchRestaurantsOrderAction({ restaurantId, token }))
    }, [dispatch, restaurantId, token])

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)

    const handleClick = e => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(null)

    const handleUpdateOrder = (orderId , orderStatus) => {
        dispatch(updateRestaurantOrderStatusAction({orderId ,orderStatus , token}))
        handleClose()
    }

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"All Orders"}
                    sx={{ pt: 2, alignItems: "center", color: "red" }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align='left'>Id</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Image</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Customer</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Price</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Name</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Ingredients</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Status</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Update Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                restaurantOrder.orders?.map((item, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='left' component="th" scope="row">{i + 1}</TableCell>
                                        <TableCell align="left">
                                            {/* <AvatarGroup> */}
                                            {
                                                item.items?.map((orderItem, i) => <Avatar key={i} src={orderItem.food?.images[0]} />)
                                            }
                                            {/* </AvatarGroup> */}
                                        </TableCell>
                                        <TableCell align="left">{item.customer?.fullName}</TableCell>
                                        <TableCell align="left">₹{item.totalPrice}</TableCell>
                                        <TableCell align="left">
                                            {
                                                item.items?.map((orderItem, i) => <p key={i}>{orderItem.food?.name}</p>)
                                            }
                                        </TableCell>
                                        <TableCell align="left">
                                            {
                                                item.items.map((orderItem, i) =>
                                                    <div key={i}>
                                                        {
                                                            orderItem.ingredients?.map((ingredient, i) => <Chip key={i} label={ingredient} />)
                                                        }
                                                    </div>
                                                )

                                            }
                                        </TableCell>
                                        <TableCell align="left">{item.orderStatus}</TableCell>
                                        <TableCell align='left'>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                Update
                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                {
                                                    orderStatus.map((status , i) => <MenuItem key={i} onClick={() => handleUpdateOrder(item.id , status.value)}>{status.label}</MenuItem>)
                                                }
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default OrderTable
