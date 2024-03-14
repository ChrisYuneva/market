import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        warning: {
            main: '#737475' 
        }
    },
    components: {
        MuiCardMedia: {
            styleOverrides: {
                img: {
                    objectFit: 'contain'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    alignItems: 'flex-end',
                    padding: '16px'
                }
            }
        }
    }
})