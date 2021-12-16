import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'

const makeStore = () =>
    configureStore({
        reducer: {
            themeReducer: themeReducer,
            productReducer: productReducer,
            cartReducer: cartReducer,
        },
        devTools: true,
    }
)

// const bindMiddleware = (middleware) => {
//     if (process.env.NODE_ENV !== 'production') {
//         if (process.env.NODE_ENV !== 'production') {
//             // const { composeWithDevTools } = require('redux-devtools-extension')
//             return composeWithDevTools(applyMiddleware(...middleware))
//         }
//         return applyMiddleware(...middleware)
//     }
// }

// const initStore = () => {
//     return createStore(rootReducer, bindMiddleware([thunkMiddleware]))
// }

export const wrapper = createWrapper(makeStore)
