import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <div>
            <Card sx={{width:345}}>
                <CardMedia 
                    sx={{height:345}}
                    image='https://images.pexels.com/photos/6210708/pexels-photo-6210708.jpeg?auto=compress&cs=tinysrgb&w=600' 
                />
                <CardContent>
                    <Typography
                        variant='h5'
                        component="div"
                    >
                        Indian Fast Food
                    </Typography>
                    <Typography
                        variant='body2'
                        component="div"
                    >
                        50% off on the first order
                    </Typography>
                    <div className="py-2 space-y-2">
                        <p>{"Kerala"}</p>
                        <p className='text-sm text-blue-500'>March 14, 2024 12:00 AM</p>
                        <p className='text-sm text-red-500'>March 15, 2024 12:00 AM</p>
                    </div>
                </CardContent>
                {
                    true && (
                                <CardActions>
                                    <IconButton>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            )
                }
            </Card>
        </div>
    )
}

export default EventCard
