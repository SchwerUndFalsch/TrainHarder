import React from "react";
import {Box} from "@mui/material";
import {Theme} from "@mui/material/styles";
import Sidebar from "./sidebar/sidebar";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    content: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '15px',
    },
}));

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