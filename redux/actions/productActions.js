import axios from "axios"
import * as actionTypes from '../actionTypes'

const url = "https://my-json-server.typicode.com/banh0006/mock_products/data"

export function loadAllProductSuccess(products) {
    return { type: actionTypes.LOAD_ALL_PRODUCTS_SUCCESS, products }
}

export function loadAllProducts() {
    return function(dispatch) {
        return axios
            .get(url)
            .then((response) => {
                dispatch(loadAllProductSuccess(response.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}