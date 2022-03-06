import React from 'react';
import {Drawer, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SidebarItems from "./sidebarItems";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    drawer: {
        '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
            border: 'unset',
            padding: '16px',
            position: 'unset',
        },
    },
});

const Sidebar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();

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
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                className={classes.drawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                }}
            >
                <SidebarItems />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                }}
                open
                className={classes.drawer}
            >
                <SidebarItems />
            </Drawer>
            { iconButton }
        </>
    );
}

export default Sidebar;