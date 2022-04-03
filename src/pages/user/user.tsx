import React from 'react';
import {Divider, Grid, Paper, TextField, Typography} from "@mui/material";
import ProfilePicture from "./profilePicture";

const styles = {
    profilePicture: {
        height: '50%',
        width: 'auto',
    }
}

const User: React.FC = () => {

    return (
        <>
            <Typography variant={"h2"}
                sx={{
                    textAlign: 'center'
                }}
            >
                Mein Profil
            </Typography>
            <Grid container>
                <Grid container xs={7} spacing={2}>
                    <Grid item xs={7}
                        sx={styles.profilePicture}
                    >
                        <ProfilePicture />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Benutzername" color='secondary' variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="E-Mail-Adresse" color='secondary' variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Vorname" color='secondary' variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Nachname" color='secondary' variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Geschlecht" color='secondary' variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Körpergröße" color='secondary' variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Passwort ändern" color='secondary' variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
                <Grid container xs={4}>
                    <Typography variant={"h3"}>
                        Meine Ziele
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default User;