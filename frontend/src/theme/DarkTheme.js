import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#212324" // green
        },
        secondary: {
            main: "#5A20CB" // purple
        },
        black: {
            main: "##0D0D0D" // black
        },
        background: {
            main: "#000000", // core black
            default: "#0D0D0D",  // black faded
            paper: "#0D0D0D" // black faded
        },
        textColor: {
            main: "#111111"
        }
    }
})