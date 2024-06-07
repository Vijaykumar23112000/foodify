import { Chip, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItemAction, updateCartItemAction } from '../redux/cart/Action';

const CartItem = ({ item }) => {

    const { authentication } = useSelector(store => store)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    var x = 1;

    const handleUpdateCartItem = value => {
        if (value === -1 && item.quantity === 1) handleRemoveCartItem()
        else {
            const requestData = { cartItemId: item.id, quantity: item.quantity + value }
            dispatch(updateCartItemAction({ requestData, token }))
        }
    }

    const handleRemoveCartItem = () => dispatch(removeCartItemAction({ cartItemId: item.id, token: authentication.token || token }))

    return (
        <div className='px-5'>
            <div className="lg:flex items-center lg:space-x-5">
                <div>
                    <img
                        className='w-[5rem] h-[5rem] object-cover'
                        src={item.food.images[0]}
                        alt="Burger"
                    />
                </div>
                <div className="flex items-center justify-between lg:w-[70%]">
                    <div className="space-y-1 lg:space-y-3 w-full">
                        <p>{item.food.name}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-1">
                                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className="w-5 h-5 text-xs flex justify-center items-center">
                                    {item.quantity}
                                </div>
                                <IconButton onClick={() => handleUpdateCartItem(1)}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>₹{item.totalPrice}</p>
                </div>
            </div>
            <div className="pt-3 space-x-2">
                {
                    item.ingredients.map(ingredient => <Chip key={++x} label={ingredient} />)
                }
            </div>
        </div>
    )
}

export default CartItem
