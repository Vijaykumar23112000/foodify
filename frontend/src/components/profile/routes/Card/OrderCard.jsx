import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className="flex items-center space-x-5">
                <img 
                    className='h-16 w-16'
                    src="https://images.pexels.com/photos/1199958/pexels-photo-1199958.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Burger" 
                />
                <div className="">
                    <p>Burger</p>
                    <p>₹399</p>
                </div>
            </div>
            <div className="">
                <Button className='cursor-not-allowed'>Completed</Button>
            </div>
        </Card>
    )
}

export default OrderCard
