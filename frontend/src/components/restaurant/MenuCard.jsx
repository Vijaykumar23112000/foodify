import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const MenuCard = () => {

    const ingredients = [
        { category: "Nuts & Seeds", ingredients: ["cashews"] },
        { category: "Protein", ingredients: ["Ground Beef", "Bacon Strips"] },
        { category: "Bread", ingredients: ["Hamburger Buns"] },
        { category: "Vegetable", ingredients: ["Lettuce", "Tomato Slices", "Pickles", "Onion Slices"] },
        { category: "Ketchup", ingredients: ["Tomato"] },

    ]

    const handleCheckBoxChange = (value) => console.log(value)

    const handleSubmit = e => e.preventDefault()

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
                            src="https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="burger"
                        />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>Burger</p>
                            <p>₹ 499</p>
                            <p className='text-gray-400'>Burger is good for health</p>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            ingredients.map(item => 
                                                <div>
                                                    <p>{item.category}</p>
                                                    <FormGroup>
                                                        {
                                                           item.ingredients.map(ingredient => 
                                                                                    <FormControlLabel 
                                                                                        control={
                                                                                                    <Checkbox 
                                                                                                        onChange={() => handleCheckBoxChange(ingredient)} 
                                                                                                        color='secondary'
                                                                                                    />
                                                                                                } 
                                                                                        label={ingredient} 
                                                                                    />
                                                                                ) 
                                                        }
                                                    </FormGroup>
                                                </div>
                                            )
                        }
                    </div>
                    <div className='pt-5'>
                        <Button type='submit' variant='contained' disabled={false}>{true ? "Add To Cart":"Out Of Stock"}</Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard
