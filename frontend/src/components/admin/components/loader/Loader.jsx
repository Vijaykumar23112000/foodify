import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
    return (
        <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex items-center justify-center">
            <CircularProgress />
        </div>
    )
}

export default Loader
