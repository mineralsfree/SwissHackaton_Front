import {useEffect, useState} from "react";
import {UserApi} from "../../api/userApi";
import {Container, Typography} from "@mui/material";

export const UserDash = () => {
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const getUserStats = async () => {
            try {
                const data = await UserApi.getProfile();
                setProfile(data);
            } catch (e) {
            }
        }
        getUserStats();
    }, [])
    return profile && (
        <Container maxWidth="md" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 4,
        }}>
            <div>

                <img
                    src={profile.profile.image_url}
                    alt="Profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        marginBottom: 16
                    }}
                />
                <Typography variant="h6" gutterBottom>
                    username: {profile.profile.display_name}
                </Typography>
            </div>

            <Typography variant="h6" gutterBottom>
                Total Saved Mass: {profile.profile.total_saved_mass}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Total Prevented CO2: {profile.profile.total_prevented_co2}
            </Typography>
            <Typography variant="h6" gutterBottom>
                Trash Items:
            </Typography>
            {profile.trash.map((item, index) => (
                <div key={index} style={{marginBottom: 16}}>
                    <Typography>{item.name}</Typography>
                    <Typography>
                        Emission Prevented: {item.emission_prevented}
                    </Typography>
                    <Typography>Mass: {item.mass}</Typography>
                    <Typography>
                        Type of Trash: {item.type_of_trash}
                    </Typography>
                </div>
            ))}
        </Container>
    )

}