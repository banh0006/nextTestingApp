import * as actionTypes from '../actionTypes'
import { checkIsExisting } from '../../methods/helperFunctions'
import Cookies from 'js-cookie'

function getItemsOnCookie() {
    let currentCartItems = []
    if (Cookies.get('cart')) {
        currentCartItems = JSON.parse(Cookies.get('cart'))
    }

    return currentCartItems
}

export function loadItemsFromCookie(items) {
    return { type:actionTypes.LOAD_ITEMS_FROM_COOKIES, items }
}

export function toggleCartPopup() {
    return { type: actionTypes.TOGGLE_CART_POPUP }
}

export function addToCart(product) {
    // const currentCartItems = getItemsOnCookie()
    // const isExisting = checkIsExisting(currentCartItems, product)

    // if (isExisting) {
    //     return {type: 'default'}
    // }

    // const newCartItems = [...currentCartItems, product]xz
    // Cookies.set('cart', JSON.stringify(newCartItems), {expires: 1})

    return { type: actionTypes.ADD_TO_CART, product }
}

export function removeFromCart(productId) {
    // const currentCartItems = getItemsOnCookie()
    // const newCartItems = currentCartItems.filter((i) => i.id !== productId)

    // Cookies.set('cart', JSON.stringify(newCartItems), {expires: 1})
    
    return { type: actionTypes.REMOVE_FROM_CART, productId }
}

export function clearCart() {
    // Cookies.set('cart', JSON.stringify([]), {expires: 1})

    return { type: actionTypes.CLEAR_CART }
}
