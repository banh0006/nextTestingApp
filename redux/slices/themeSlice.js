import { createSlice } from '@reduxjs/toolkit'

export const checkIsNightTime = () => {
    return (dispatch) => {
        const currentHours = new Date().getHours()
        // currentHours += 12
        // console.log(currentHours, " current hour")
        const isNightTime = currentHours < 7 || currentHours > 19

        if (isNightTime) {
            dispatch(themeSlice.actions.setTheme(true))
        } else {
            dispatch(themeSlice.actions.setTheme(false))
        }
    }
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false
    },
    reducers: {
        setTheme: (state, action) => {
            state.isDarkMode = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer