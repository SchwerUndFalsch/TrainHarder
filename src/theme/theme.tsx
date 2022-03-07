import {createTheme, responsiveFontSizes} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            // main: '#eceef7',
            main: '#f1edef'
        },
        secondary: {
            // main: '#80d8ff',
            // light: 'rgba(171,237,255,0.42)',
            main: '#7f77e0',
        },
        background: {
            // default: '#EFF1F3'
        },
        action: {
            hover: 'rgba(127,119,224,0.27)',
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: [
                        'League Spartan',
                        'serif'
                    ].join(',')
                },
                caption: {
                    color: '#70809080',
                    fontSize: 16,
                }
            }
        }
    }

});

export default responsiveFontSizes(theme);

