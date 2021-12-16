import { Button } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { toggleCartPopup, loadItemsFromCookie } from '../../redux/slices/cartSlice'
import styles from '../../styles/cart-preview.module.scss'
import CartItem from './CartItem'
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'


export function CartPreview() {
    const cartPreviewRef = useRef()
    const dispatch = useDispatch()
    const { items: cartItems, isCartOpen } = useSelector(state => state.cartReducer)

    const cartItemList = 
    cartItems.length > 0 
        ? cartItems.map(product => (
            <CartItem key={product.id} product={product}/>
        ))
        : <div>Nothing in your cart</div>

    const checkoutHandler = () => {
        dispatch(toggleCartPopup())
    }

    useEffect(() => {
        if (cartItems.length === 0 && Cookies.get('cart')) {
            const currentCartItems = JSON.parse(Cookies.get('cart'))
            dispatch(loadItemsFromCookie(currentCartItems))
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = e => {
            if (isCartOpen && cartPreviewRef.current && !cartPreviewRef.current.contains(e.target)) {
                dispatch(toggleCartPopup())
            }
        }

        if (typeof window !== 'undefined') {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
        // eslint-disable-next-line
    }, [isCartOpen])


    return (
       <div 
            className={`${styles.wrapper} ${isCartOpen ? styles.active : null}`}
            ref={cartPreviewRef}
        >
            <div className={styles.scroll_div}>
                <ul>
                        {cartItemList}
                </ul>
            </div>
            <div className={styles.cart_action}>
                <Link href='/checkout' passHref> 
                    <Button variant="contained" onClick={checkoutHandler} >
                        Checkout
                    </Button>
                </Link>
            </div>
       </div>
    )
}

export default CartPreview

