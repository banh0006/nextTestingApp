import React, { useEffect } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { darkTheme, lightTheme } from '../styles/theme'
import { checkIsNightTime } from '../redux/slices/themeSlice'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

export function MyThemeProvider(props) {
    const dispatch = useDispatch()
    const isDarkMode = useSelector(state => state.themeReducer.isDarkMode)

    useEffect(() => {
        dispatch(checkIsNightTime())
        // props.checkIsNightTime()
        // eslint-disable-next-line
    }, []) 

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            {props.children}
        </ThemeProvider>
    )
}

// const mapStateToProps = (state) => ({
//     isDarkMode: state.themeReducer.isDarkMode
// })

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // checkIsNightTime: bindActionCreators(checkIsNightTime, dispatch)
//     }
// }

export default MyThemeProvider
// export default connect(mapStateToProps, mapDispatchToProps)(MyThemeProvider)
