import React from 'react'
import { Grid } from '@mui/material'
import styles from '../../styles/main-logo-container.module.scss'
import CartPreview from './CartPreview'
import { toggleCartPopup } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

export function RightMenu(props) {
    const cartItems = useSelector(state => state.cartReducer.items)
    const dispatch = useDispatch()

    const handleOpenCart = () => {
         dispatch(toggleCartPopup())
    }

    return (
        <Grid item xs={4} md={6} lg={3} className={styles.right_menu__div}>
            <ul className={styles.right_menu}>
                <li>
                    <img src="/assets/images/cars_img.png"></img>
                    <span>0</span>
                </li>
                <li>
                    <img src="/assets/images/wish_list_img.png"></img>
                    <span>0</span>
                </li>
                <li>
                    <img src="/assets/images/cart_img.png" onClick={handleOpenCart}></img>
                    <span>{cartItems.length}</span>
                    {/* <span>{props.cartItems.length}</span> */}
                    <CartPreview />
                </li>
            </ul>
        </Grid>
    )
}

export default RightMenu
