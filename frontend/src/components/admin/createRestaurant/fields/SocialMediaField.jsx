import { Grid, TextField } from '@mui/material'
import React from 'react'

const SocialMediaField = ({ formik }) => {
    return (
        <>
            <Grid item xs={12} lg={6}>
                <TextField
                    fullWidth
                    id='instagram'
                    name='instagram'
                    label="Instagram"
                    variant='outlined'
                    onChange={formik.handleChange}
                    value={formik.values.instagram}
                >
                </TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
                <TextField
                    fullWidth
                    id='twitter'
                    name='twitter'
                    label="Twitter"
                    variant='outlined'
                    onChange={formik.handleChange}
                    value={formik.values.twitter}
                >
                </TextField>
            </Grid>
        </>
    )
}

export default SocialMediaField
