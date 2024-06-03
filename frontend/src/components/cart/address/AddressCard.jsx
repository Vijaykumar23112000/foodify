import React from 'react'
import { Button, Card } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';

const AddressCard = ({ item, showButton , handleSelectAddress }) => {

    return (
        <Card className='flex gap-5 w-64 p-5'>
            <HomeIcon />
            <div className="space-y-3 text-gray-500">
                <h1 className='font-semibold text-lg text-white'>Home</h1>
                <p>123 house , 123 lane , 123 street , 123 town , 123 city , 123 state , 123 country</p>
                {
                    showButton && <Button variant='outlined' fullWidth onClick={()=>handleSelectAddress(item)}>Select</Button>
                }
            </div>
        </Card>
    )
}

export default AddressCard
