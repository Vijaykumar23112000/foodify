import { Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const OrderTable = () => {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"All Orders"}
                    sx={{ pt: 2, alignItems: "center",color:"red"}}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{color:"red"}} className='font-semibold' align='left'>Id</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Image</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Customer</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Price</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Name</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Ingredients</TableCell>
                                <TableCell sx={{color:"red"}} className='font-semibold' align="left">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[1, 1, 1, 1, 1, 1, 1, 1].map((row, i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left' component="th" scope="row">{1}</TableCell>
                                    <TableCell align="left">{"image"}</TableCell>
                                    <TableCell align="left">{"Mathew"}</TableCell>
                                    <TableCell align="left">{"price"}</TableCell>
                                    <TableCell align="left">{"pizza"}</TableCell>
                                    <TableCell align="left">{"ingredients"}</TableCell>
                                    <TableCell align="left">{"completed"}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    )
}

export default OrderTable
