import * as actionTypes from '../actionTypes'

export function setTheme(darkMode) {
    return { type: actionTypes.SET_THEME, darkMode }
}

export function checkIsNightTime() {
    return function (dispatch) {
        const currentHours = new Date().getHours()
        // currentHours += 12
        const isNightTime = currentHours < 7 || currentHours > 19
        if (isNightTime) {
            dispatch(setTheme(true))
        } else {
            dispatch(setTheme(false))
        }
    }
}
