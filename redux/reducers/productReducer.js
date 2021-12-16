import * as actionTypes from '../actionTypes'

const initialState = {
    products: [],
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products
            }
        
        default:
            return state
    }
}
