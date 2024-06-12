import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import CreateEventForm from '../../../createEvent/CreateEventForm';

const Events = () => {

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
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <div>
            <div className="p-5">
                <Button fullWidth variant='outlined' onClick={handleOpen}>Create New Event</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CreateEventForm />
                    </Box>
                </Modal>
            </div>
        </div>
    )
}

export default Events
