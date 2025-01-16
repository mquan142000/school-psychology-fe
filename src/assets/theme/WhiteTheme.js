const {createTheme} = require("@mui/material");

export const whiteTheme = createTheme({
    palette: {
        mode: "light",
        light: {
            main: "#FFF"
        },
        background: {
            main: '#FFF',
            default: "#FFF",
            paper: "#FFF"
        },
        textColor: {
            main: "#111"
        }
    }
})