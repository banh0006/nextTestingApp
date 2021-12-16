import * as actionTypes from '../actionTypes'

const initialState = {
    items: [],
    isCartOpen: false
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        // TODO: research more about hydration in next redux wrapper
        // case HYDRATE: 
        //     return { ...state, ...action.payload }
        case actionTypes.LOAD_ITEMS_FROM_COOKIES: 
            return {
                ...state,
                items: action.items
            }
        case actionTypes.TOGGLE_CART_POPUP:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.product]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((i) => i.id !== action.productId)
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}
