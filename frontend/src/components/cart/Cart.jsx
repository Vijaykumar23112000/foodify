import { Box, Button, Card, Divider, Grid, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CartItem from './CartItem'
import AddressCard from './address/AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Field, Form, Formik } from 'formik';
import { validation } from './address/Validation';

const Cart = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outline: "none",
    };

    const initialValues = {
        streetAddress: "",
        state: "",
        pincode: "",
        city: ""
    }

    const [open, setOpen] = useState(false);

    const handleCloseAddressModal = () => setOpen(false);

    const createOrderUsingSelectedAddress = () => { }

    const handleOpenAddressModel = () => setOpen(true)
    
    const handleSubmit = (values) => console.log(values)

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {
                        [1, 1, 1].map(item => <CartItem />)
                    }
                    <Divider />
                    <div className="billDetails px-5 text-sm">
                        <p className='py-5 font-extralight'>Bill Details</p>
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-400">
                                <p>Item Total</p>
                                <p>₹599</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>Delivery Charge</p>
                                <p>₹21</p>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <p>GST and Restaurant Charges Charge</p>
                                <p>₹33</p>
                            </div>
                            <Divider />
                        </div>
                        <div className="flex justify-between text-gray-400 pt-2">
                            <p>Total Pay</p>
                            <p>₹3300</p>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                    <div className="">
                        <Typography variant='h3' className='text-center font-semibold text-2xl py-10' >Choose Delivery Address</Typography>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {
                                [1, 1, 1, 1, 1].map(item => <AddressCard item={item} showButton={true} handleSelectAddress={createOrderUsingSelectedAddress} />)
                            }
                            <Card className='flex gap-5 w-64 p-5'>
                                <AddLocationAltIcon />
                                <div className="space-y-3 text-gray-500">
                                    <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                    <Button variant='outlined' fullWidth onClick={handleOpenAddressModel}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleCloseAddressModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validation}
                    >
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    {/* {errors.streetAddress && <span>{errors.streetAddress}</span>} */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="state"
                                        label="State"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    {/* {errors.state && <span>{errors.state}</span>} */}
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        as={TextField}
                                        name="pincode"
                                        label="Pincode"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    {/* {errors.pincode && <span>{errors.pincode}</span>} */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="city"
                                        label="City"
                                        fullWidth
                                        variant="outlined"
                                    />
                                    {/* {errors.city && <span>{errors.city}</span>} */}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' type='submit' color='primary'>Deliver Here</Button>
                                </Grid>
                            </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart
