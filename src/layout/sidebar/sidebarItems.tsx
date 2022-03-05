import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import {Avatar, Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {createStyles, makeStyles, withStyles, WithStyles} from "@mui/styles";

const useStyles = makeStyles({
    menu: {
        padding: '16px',
    },
    menuItems: {
        borderRadius: '10px',
        height: '45px',
        '&:hover': {
            backgroundColor: '#E9DDFE',
        },
    },
    userPaper: {
        backgroundColor: '#6750A4',
        margin: '16px',
        padding: '16px',
    },
})

interface AreaData {
    title: string;
    icon: any;
    link: string;
}

const SidebarItems: React.FC = () => {

    const  classes = useStyles();

    const bodyAreaData: AreaData[] = [
        {
            title: 'Gewicht',
            icon: <PersonIcon />,
            link: '/weight',
        },
        {
            title: 'KFA',
            icon: <FitnessCenterIcon />,
            link: '/kfa',
        },
        {
            title: 'Umfänge',
            icon: <FitnessCenterIcon />,
            link: '',
        },
        {
            title: 'Auswertung',
            icon: <FitnessCenterIcon />,
            link: '',
        },
    ];

    const trainingAreaData: AreaData[] = [
        {
            title: 'Übungen',
            icon: <PersonIcon />,
            link: '',
        },
        {
            title: 'Trainingspläne',
            icon: <FitnessCenterIcon />,
            link: '',
        },
        {
            title: 'Tagebuch',
            icon: <FitnessCenterIcon />,
            link: '',
        },
        {
            title: 'Auswertung',
            icon: <FitnessCenterIcon />,
            link: '',
        },
    ];

    const userAreaData: AreaData[] = [
        {
            title: 'Profil',
            icon: <PersonIcon />,
            link: '/user',
        },
        {
            title: 'Kraftwerte',
            icon: <FitnessCenterIcon />,
            link: '',
        },
    ];

    const displayAreaData = (areaData: AreaData[]) => {
        return(
            areaData.map((value, key) => {
                return (
                    <MenuItem
                        key={ key }
                        component={ Link }
                        to={ value.link }
                        className={classes.menuItems}
                    >
                        <ListItemIcon>
                            { value.icon }
                        </ListItemIcon>
                        <ListItemText>
                            { value.title }
                        </ListItemText>
                    </MenuItem>
                )
            })
        );
    }

    return(
      <>
          <Paper elevation={4}
                 className={classes.userPaper}>
              <Avatar variant="rounded">
                  JH
              </Avatar>
          </Paper>

          <MenuList className={classes.menu}>
              <Box mb={5}>
                  <Typography>
                      KÖRPERDATEN
                  </Typography>
                  { displayAreaData(bodyAreaData) }
              </Box>

              <Box mb={5}>
                  <Typography>
                      Training
                  </Typography>
                  { displayAreaData(trainingAreaData) }
              </Box>

              <Box mb={5}>
                  <Typography>
                      Benutzer
                  </Typography>
                  { displayAreaData(userAreaData) }
              </Box>
          </MenuList>

      </>
    );
}

export default SidebarItems;