import React from "react";
import {Box} from "@mui/material";
import Sidebar from "./sidebar/sidebar";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    content: {
        backgroundColor: '#F7F2FA',
        borderRadius: '15px',
    },
})

const Layout: React.FC = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="nav"
                    sx={{ width: { sm: 300 }, flexShrink: { sm: 0 } }}
                >
                    <Sidebar />
                </Box>

                <Box
                    className={classes.content}
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${300}px)` } }}
                >
                    { children }
                </Box>
            </Box>
        </>
    );
}

export default Layout;