import React, {useState} from 'react';
import {Person} from "@mui/icons-material";

const ProfilePicture = () => {
    const [profilePicture] = useState(undefined);

    if (!profilePicture) {
        return (
            <Person/>
        )
    }

    return (
        <img/>
    )
}
export default ProfilePicture;