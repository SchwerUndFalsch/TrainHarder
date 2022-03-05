import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import {Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    menu: {
        padding: '16px',
    },
    menuItems: {
        borderRadius: '10px',
    },
})

interface AreaData {
    title: string;
    icon: any;
    link: string;
}

const SidebarItems: React.FC = () => {

    const classes = useStyles();

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
          <MenuList className={classes.menu}>
              <Typography>
                  Körperdaten
              </Typography>
              { displayAreaData(bodyAreaData) }
              <Divider />


              <Typography>
                  Training
              </Typography>
              { displayAreaData(trainingAreaData) }
              <Divider />

              <Typography>
                  Benutzer
              </Typography>
              { displayAreaData(userAreaData) }
          </MenuList>

      </>
    );
}

export default SidebarItems