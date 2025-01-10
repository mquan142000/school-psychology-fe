const { createTheme } = require("@mui/material");

export const whiteTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#e91e63"
        },
        secondary: {
            main: "#5A20CB"
        },
        light:{
            main: "#FFF"
        },
        background:{
            main: '#FFF',
            default: "#FFF",
            paper: "#FFF"
        },
        textColor: {
            main: "#111"
        }
    }
})