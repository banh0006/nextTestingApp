import React from 'react'
import styles from '../../styles/product-cart.module.scss'
import { Button } from '@mui/material'
import { addToCart } from '../../redux/slices/cartSlice'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

export function ProductCart(props) {
    const { image, name , price, id, stock} = props.product
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        // NOTE: temporary use both cookie and redux store  
        dispatch(addToCart(props.product))
    }

    return (
            <div className={styles.product}>
                <div className={styles.product_image}>
                <Link href={`/products/${id}`} passHref>
                    <img src={image} alt="product_name"></img>
                </Link>
                </div>
                <div className={styles.product_name}>
                    {name}
                </div>
                <div className={styles.product_price}>{price}</div>
                <div className={styles.product_action}>
                    <Button onClick={handleAddToCart}>
                        Add to cart
                    </Button>
                </div>
            </div>
    )
}

export default ProductCart
