import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import { categorizeIngredients } from './util/CategorizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCartAction } from '../redux/cart/Action';

const MenuCard = ({ item }) => {

    const [selectedIngredients, setSelectedIngredients] = useState([])
    const dispatch = useDispatch()
    const categorizedIngredients = categorizeIngredients(item.ingredients)

    const handleAddItemToCard = e => {
        e.preventDefault()
        const requestData = {
            token: localStorage.getItem("token"),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCartAction(requestData))
    }

    const handleCheckBoxChange = ingredientName => selectedIngredients.includes(ingredientName) ?
        setSelectedIngredients(selectedIngredients.filter(item => item !== ingredientName)) :
        setSelectedIngredients([...selectedIngredients, ingredientName])

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className="lg:flex items-center justify-between">
                    <div className='lg:flex items-center lg:gap-5'>
                        <img
                            className='w-[7rem] h-[7rem] object-cover'
                            src={item.images[0]}
                            alt={item.name}
                        />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>{item.name}</p>
                            <p>₹ {item.price}</p>
                            <p className='text-gray-400'>{item.description}</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleAddItemToCard}>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            Object.keys(categorizedIngredients).map((category, i) =>
                                <div key={i}>
                                    <p className='py-5'>{category}</p>
                                    <FormGroup>
                                        {
                                            categorizedIngredients[category].map((ingredient, j) =>
                                                <FormControlLabel
                                                    key={j}
                                                    control={
                                                        <Checkbox
                                                            onChange={() => handleCheckBoxChange(ingredient.name)}
                                                            color='secondary'
                                                        />
                                                    }
                                                    label={ingredient.name}
                                                />
                                            )
                                        }
                                    </FormGroup>
                                </div>
                            )

                        }
                    </div>
                    <div className='pt-5'>
                        <Button
                            type='submit'
                            variant='contained'
                            disabled={false}
                        >
                            {true ? "Add To Cart" : "Out Of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard
