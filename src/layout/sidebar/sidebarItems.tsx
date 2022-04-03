import React, {useEffect, useState} from "react";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';

import {
    Avatar,
    Box,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import logoWithWriting from "../../assets/images/logoWithWriting.png";

const styles = {
    menuItems: {
        '&.MuiMenuItem-root': {
            borderRadius: '10px',
            height: '45px',
            '&:hover': {
                backgroundColor: 'action.hover',
            },
        }
    },
    userPaper: {
        "&.MuiPaper-root": {
            backgroundColor: 'secondary.main',
            padding: '16px',
        }
    },
    logo: {
        width: '-webkit-fill-available',
    }
};

interface AreaData {
    title: string;
    icon: any;
    link: string;
}

const SidebarItems: React.FC = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<any>(undefined);

    const bodyAreaData: AreaData[] = [
        {
            title: 'Gewicht',
            icon: <ScaleOutlinedIcon />,
            link: '/weight',
        },
        {
            title: 'KFA',
            icon: <PercentOutlinedIcon />,
            link: '/kfa',
        },
        {
            title: 'Umfänge',
            icon: <StraightenOutlinedIcon />,
            link: '/circumferences',
        },
        {
            title: 'Auswertung',
            icon: <InsertChartOutlinedOutlinedIcon />,
            link: 'bodyEvaluation',
        },
    ];

    const trainingAreaData: AreaData[] = [
        {
            title: 'Übungen',
            icon: <FitnessCenterOutlinedIcon />,
            link: 'exercises',
        },
        {
            title: 'Trainingspläne',
            icon: <NewspaperOutlinedIcon />,
            link: 'trainingPlans',
        },
        {
            title: 'Tagebuch',
            icon: <AssignmentOutlinedIcon />,
            link: 'trainingDiary',
        },
        {
            title: 'Auswertung',
            icon: <InsertChartOutlinedOutlinedIcon />,
            link: 'trainingEvaluation',
        },
    ];

    const userAreaData: AreaData[] = [
        {
            title: 'Profil',
            icon: <PersonOutlinedIcon />,
            link: '/user',
        },
        {
            title: 'Kraftwerte',
            icon: <MovingOutlinedIcon />,
            link: 'forceValues',
        },
    ];

    const displayAreaData = (areaData: AreaData[]) => {
        return(
            areaData.map((value) => {
                return (
                    <MenuItem
                        key={ value.link }
                        component={ Link }
                        to={ value.link }
                        sx={{
                            ...styles.menuItems,
                            backgroundColor: selectedMenuItem === value.link ? 'action.hover' : '',
                            color: selectedMenuItem === value.link ? 'white' : 'black',
                            '&:hover':{
                                color: 'white',
                                ".MuiListItemIcon-root": {
                                    color: "white"
                                }
                            }
                        }
                    }
                        onClick={() => setSelectedMenuItem(value.link)}
                    >
                        <ListItemIcon
                            sx={{
                                color: selectedMenuItem === value.link ? 'white' : 'black',
                            }}
                        >
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
                  src={ logoWithWriting } style={styles.logo}
              />
          </Box>

          <Box mb={5}>
              <Paper
                  elevation={4}
                  sx={styles.userPaper}
              >
                  <Avatar variant="rounded">
                  </Avatar>
              </Paper>
          </Box>

          <MenuList>
              <Box mb={5}>
                  <Typography variant='caption'>
                      KÖRPERDATEN
                  </Typography>
                  { displayAreaData(bodyAreaData) }
              </Box>

              <Box mb={5}>
                  <Typography variant='caption'>
                      TRAINING
                  </Typography>
                  { displayAreaData(trainingAreaData) }
              </Box>

              <Box mb={5}>
                  <Typography variant='caption'>
                      BENUTZER
                  </Typography>
                  { displayAreaData(userAreaData) }
              </Box>
          </MenuList>
      </>
    );
}

export default SidebarItems;