import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SeasonalField = ({ formik }) => {
    return (
        <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Seasonal</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={formik.values.seasonal}
                    label="Is Seasonal"
                    onChange={formik.handleChange}
                    name="seasonal"
                >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}

export default SeasonalField
