import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MenuTable = () => {

    const navigate = useNavigate()

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
                    sx={{ pt: 2, alignItems: "center" , color:"red" }}
                />                    
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Image</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Title</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Ingredients</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Price</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Availability</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[1, 1, 1, 1, 1, 1, 1, 1].map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left' component="th" scope="row">{"image"}</TableCell>
                                    <TableCell align="left">{"image"}</TableCell>
                                    <TableCell align="left">{"Mathew"}</TableCell>
                                    <TableCell align="left">{"price"}</TableCell>
                                    <TableCell align="left">{"pizza"}</TableCell>
                                    <TableCell align="left">
                                        <IconButton>
                                               <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default MenuTable
