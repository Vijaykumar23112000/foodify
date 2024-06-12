import { Grid, IconButton } from '@mui/material'
import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import Loader from '../../components/loader/Loader';

const ImageField = ({ handleImageChange, handleRemoveImage, formik , uploadImage }) => {
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
                    formik.values.images.map((image, i) => (
                        <div className='relative' key={i}>
                            <img
                                className='w-24 h-24 object-cover'
                                src={image}
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
