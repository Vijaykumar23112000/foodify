import { Box, Card, CardHeader, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const IngredientCategoryTable = () => {
    return (
        <Box>
        <Card className='mt-1'>
            <CardHeader
                action={
                    <IconButton aria-label='settings'>
                        <AddIcon color='primary' />
                    </IconButton>
                }
                title={"Ingredient Category"}
                sx={{ pt: 2, alignItems: "center" , color:"red" }}
            />                    
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{color:"red"}} className='font-semibold' align="left">Id</TableCell>
                            <TableCell sx={{color:"red"}} className='font-semibold' align="left">Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {[1, 1, 1, 1, 1, 1, 1, 1].map((row, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align='left' component="th" scope="row">{1}</TableCell>
                                <TableCell align="left">{"Feba"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    </Box>
    )
}

export default IngredientCategoryTable
