import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loadAllProducts = createAsyncThunk(
    'products/loadAllProducts', 
    async() => {
        // TODO create an api helper function to store all the apis request
        const url = "https://my-json-server.typicode.com/banh0006/mock_products/data"
        const data = await axios
            .get(url)
            .then((response) => {
                return response.data
            })
            .catch((err) => {
                console.log(err)
                throw err
            })

        return data
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false
    },
    extraReducers: {
        [loadAllProducts.pending]: (state) => {
            state.isLoading = true
        },
        [loadAllProducts.fulfilled]: (state, action) => {
            state.products = action.payload,
            state.isLoading = false
        },
        [loadAllProducts.rejected]: (state) => {
            state.isLoading = false
        }
    }
})

export default productSlice.reducer