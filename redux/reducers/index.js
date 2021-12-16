import { combineReducers } from 'redux'
import themeReducer from './themeReducer'
import cartReducer from './cartReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    themeReducer,
    cartReducer,
    productReducer
})

export default rootReducer
