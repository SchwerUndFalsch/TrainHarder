import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import {Avatar, Box, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Theme, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import logoWithWriting from "../../assets/images/logoWithWriting.png";

const useStyles = makeStyles((theme: Theme) => ({
    menu: {
        padding: theme.spacing(2),
    },
    menuItems: {
        '&.MuiMenuItem-root': {
            borderRadius: '10px',
            height: '45px',
            '&:hover': {
                backgroundColor: theme.palette.secondary.light,
            },
        }
    },
    userPaper: {
        "&.MuiPaper-root": {
            backgroundColor: theme.palette.secondary.main,
            padding: '16px',
        }
    },
    logo: {
        width: '-webkit-fill-available',
    }
}));

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
          <Box mb={5}>
              <img
                  src={ logoWithWriting }
                  className={classes.logo}
              />
          </Box>

          <Box mb={5}>
              <Paper elevation={4}
                     className={classes.userPaper}>
                  <Avatar variant="rounded">
                  </Avatar>
              </Paper>
          </Box>

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