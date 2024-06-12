import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import CreateIngredientCategoryForm from '../../../createIngredient/CreateIngredientCategoryForm';

const IngredientCategoryTable = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Box>
        <Card className='mt-1'>
            <CardHeader
                action={
                    <IconButton onClick={handleOpen} aria-label='settings'>
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
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateIngredientCategoryForm />
                </Box>
            </Modal>
    </Box>
    )
}

export default IngredientCategoryTable
