import React from "react";
import {Box} from "@mui/material";
import Sidebar from "./sidebar/sidebar";

const style = {
    content: {
        backgroundColor: 'primary.main',
        borderRadius: '15px',
        margin: 2,
    }

};

const Layout: React.FC = (props) => {
    const { children } = props;

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
                    component="main"
                    sx={
                        { ...style.content,flexGrow: 1, p: 3, width: { sm: `calc(100% - ${300}px)` } }
                    }
                >
                    { children }
                </Box>
            </Box>
        </>
    );
}

export default Layout;