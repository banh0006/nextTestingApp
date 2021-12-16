import { createSlice } from '@reduxjs/toolkit'
import { checkIsExisting } from '../../methods/helperFunctions'
import Cookies from 'js-cookie'

function getItemsOnCookie() {
    let currentCartItems = []
    if (Cookies.get('cart')) {
        currentCartItems = JSON.parse(Cookies.get('cart'))
    }

    return currentCartItems
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        isCartOpen: false
    },
    reducers: {
        loadItemsFromCookie: (state, action) => {
            state.items = action.payload
        },
        toggleCartPopup: (state) => {
            state.isCartOpen = !state.isCartOpen
        },
        clearCart: (state) => {
            state.items = ["Product1"]
        },
        addToCart: {
            reducer: (state, action) => {
                state.items = [...state.items, action.payload.product]                
            },
            prepare: (product) => {
                const currentCartItems = getItemsOnCookie()
                const isExisting = checkIsExisting(currentCartItems, product)

                if (isExisting) {
                    return {type: 'default'}
                }
                const newCartItems = [...currentCartItems, product]
                Cookies.set('cart', JSON.stringify(newCartItems), {expires: 1})
                return {
                    payload: {
                        product
                    }
                }
            }
        },
        removeFromCart: {
            reducer: (state, action) => {
                state.items = state.items.filter(i => i.id !== action.payload.productId)
            },
            prepare: (productId) => {
                const currentCartItems = getItemsOnCookie()
                const newCartItems = currentCartItems.filter((i) => i.id !== productId)
                Cookies.set('cart', JSON.stringify(newCartItems), {expires: 1})
            
                return {
                    payload: {
                        productId
                    }
                }
            }
        }
    }
})

export const { loadItemsFromCookie, toggleCartPopup, clearCart, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer