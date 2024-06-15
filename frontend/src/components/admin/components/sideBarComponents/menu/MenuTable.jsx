import { Avatar, Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFoodAction, getAllRestaurantsFood } from '../../../../redux/menu/Action';

const MenuTable = () => {

    const dispatch = useDispatch()
    const { restaurant, menu } = useSelector(store => store)
    const restaurantId = restaurant.usersRestaurant.id
    const token = localStorage.getItem("token")
    const [updateTrigger, setUpdateTrigger] = useState(false);

    useEffect(() => {
        dispatch(getAllRestaurantsFood({ restaurantId, token }))
    }, [dispatch, restaurantId, token, updateTrigger])

    const navigate = useNavigate()

    const handleDelete = id => dispatch(deleteFoodAction({ foodId: id, token })).then(() => setUpdateTrigger(prev => !prev))

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    action={
                        <IconButton onClick={() => navigate("/admin/restaurant/add-menu")} aria-label='settings'>
                            <AddIcon color='primary' />
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{ pt: 2, alignItems: "center", color: "red" }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Image</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Title</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Ingredients</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Price</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Availability</TableCell>
                                <TableCell sx={{ color: "red" }} className='font-semibold' align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                menu.menuItems?.map((item, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align='left' component="th" scope="row">
                                            <Avatar src={item.images[0]} />
                                        </TableCell>
                                        <TableCell align="left">{item.name}</TableCell>
                                        <TableCell align="left">
                                            {
                                                item.ingredients?.map((ingredient, i) => <Chip key={i} label={ingredient.name} />)
                                            }
                                        </TableCell>
                                        <TableCell align="left">₹{item.price}</TableCell>
                                        <TableCell align="left">{item.isAvailable ? "Available" : "Out Of Stock"}</TableCell>
                                        <TableCell align="left">
                                            <IconButton onClick={() =>handleDelete(item.id)}>
                                                <Delete color='error' />
                                            </IconButton>
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

export default MenuTable
