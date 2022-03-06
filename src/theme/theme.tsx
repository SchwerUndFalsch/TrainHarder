import {createTheme, responsiveFontSizes} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#eceef7',
        },
        secondary: {
            main: '#80d8ff',
            light: 'rgba(171,237,255,0.42)',
        },
        background: {
            default: '#EFF1F3'
        },
    },

});

export default responsiveFontSizes(theme);

