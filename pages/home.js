import React, { useState, useEffect } from 'react'
import ProductCart from '../components/elements/ProductCard'
import styles from '.././styles/product-cart.module.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadAllProducts } from '../redux/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'

export function HomePage(props) {
    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products)

    const productList = products 
    ? products.map(product => (
      <ProductCart key={product.id} product={product} />
    ))
    : <div>Loading ...</div>

    useEffect(() => {
      dispatch(loadAllProducts())
      // eslint-disable-next-line
    }, [])

    return (
      <div className={styles.products_wrapper}>
        <div className={styles.products}>
            {productList}
        </div>
      </div>
    )
}

export default HomePage
