import { Box, Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'

const IngredientsField = ({ formik }) => {

    return (
        <Grid item xs={12}>
            <FormControl fullWidth>
                <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
                <Select
                    name="ingredients"
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={formik.values.ingredients}
                    onChange={formik.handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                >
                    {
                        ["bread", "sauce", "apple"].map((name, i) => (
                            <MenuItem
                                key={i}
                                value={name}
                            >
                                {name}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Grid>
    )
}

export default IngredientsField
