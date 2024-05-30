import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#e91e63" // red
        },
        secondary: {
            main: "#5A20CB" // purple
        },
        black: {
            main: "#242B2E" // gray-black
        },
        background: {
            main: "#000000", // core black
            default: "#0D0D0D",  // black-light-faded
            paper: "#0D0D0D" // black faded
        },
        textColor: {
            main: "#111111"
        }
    }
})