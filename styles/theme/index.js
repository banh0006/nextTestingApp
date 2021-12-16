import { createTheme } from '@mui/material'
import * as palette from './palette'
import * as variables from './variables'

// base theme share the common styling for both dark and ligh theme
const baseTheme = createTheme({
    typography: {
        fontFamily: variables.fontFamily,
        fontSize: 14,
        fontFamilySecondary: "'Roboto Condensed', sans-serif"
    }
})

const darkTheme = createTheme({
    ...baseTheme,
    typography: {
        fontSize: 14
    },
    palette: {
        type: 'dark',
        mode: 'dark',
        primary: {
            main: palette.darkmodePrimaryMain
        },
        secondary: {
            main: palette.darkmodeSecondaryMain
        }
    }
})

const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        type: 'light',
        mode: 'light',
        primary: {
            main: palette.primaryMain,
            light: palette.$primaryLigth,
            dark: palette.primaryDark
        },
        secondary: {
            main: palette.secondaryMain,
            light: palette.secondaryLight,
            dark: palette.secondaryDark
        }
    }
})

export { darkTheme, lightTheme }
