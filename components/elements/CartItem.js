import React from 'react'
import styles from '../../styles/cart-preview.module.scss'
import ClearIcon from '@mui/icons-material/Clear'

import { removeFromCart } from '../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'



export function CartItem(props) {
    const { id, name, image, price } = props.product
    const dispatch = useDispatch()

    const handleRemoveItem = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <li className={styles.cart_item} key={id}>
            <img src={image} alt={`${name}`}></img>
                <p>{name}</p>
                <p>{price}</p>
            <div onClick={handleRemoveItem}> 
                <ClearIcon  />
            </div>
        </li>
    )
}

export default CartItem
