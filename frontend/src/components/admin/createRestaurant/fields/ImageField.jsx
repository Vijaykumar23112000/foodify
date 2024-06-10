import { Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import Loader from '../Loader';


const ImageField = ({handleImageChange , handleRemoveImage}) => {

    const [uploadImage, setUploadImage] = useState(false)

    return (
        <Grid item xs={12} className='flex flex-wrap gap-5' >
            <input
                style={{ display: "none" }}
                onChange={handleImageChange}
                type="file"
                accept='image/*'
                id='fileInput'
            />
            <label className='relative' htmlFor="fileInput">
                <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                    <AddPhotoAlternateIcon className='text-white' />
                </span>
                {
                    uploadImage && <Loader />
                }
            </label>
            <div className="flex flex-wrap gap-2">
                {
                    [1, 1, 1, 1].map((item, i) => (
                        <div className='relative' key={i}>
                            <img
                                className='w-24 h-24 object-cover'
                                src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=400"
                                alt="burger"
                            />
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    outline: "none"
                                }}
                                size='small'
                                onClick={() => handleRemoveImage(i)}
                            >
                                <CloseIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                        </div>
                    ))
                }
            </div>
        </Grid>
    )
}

export default ImageField
