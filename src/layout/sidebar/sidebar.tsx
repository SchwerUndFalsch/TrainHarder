import React from 'react';
import {Box, Drawer, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItems from "./sidebarItems";


const Sidebar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const iconButton = (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon />
        </IconButton>
    );

    return (
        <>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: 'grey',
                }}
            >
                <img src='../../assets/images/logoWithWriting.png'/>
            </Box>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                }}
            >
                <SidebarItems />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                }}
                open
            >
                <SidebarItems />
            </Drawer>
            { iconButton }
        </>
    );
}

export default Sidebar;