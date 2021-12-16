import * as actionTypes from '../actionTypes'

const initialState = {
    isDarkMode: false
}

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return { isDarkMode: action.darkMode }
        default:
            return state
    }
}
