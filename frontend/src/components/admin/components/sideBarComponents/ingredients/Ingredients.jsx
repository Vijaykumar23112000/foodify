import { Grid } from '@mui/material'
import React from 'react'
import IngredientTable from './IngredientTable'
import IngredientCategoryTable from './IngredientCategoryTable'

const Ingredients = () => {
    return (
        <div className='px-2 mt-5'>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}  >
                    <IngredientTable />
                </Grid>
                <Grid item xs={12} lg={4}  >
                    <IngredientCategoryTable />
                </Grid>
            </Grid>
        </div>
    )
}

export default Ingredients
