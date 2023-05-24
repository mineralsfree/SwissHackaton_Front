import {useEffect, useState} from "react";
import {UserApi} from "../../api/userApi";
import {Container, Typography} from "@mui/material";
import {TrashPaper} from "./TrashPaper";
import {Link} from "react-router-dom";
import {massConverter} from "../../helpers/massHelper";

export const colorStringMap = ['#0066FF', '#44AA00', '#FFCC00', '#552200', '#000000']

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
    let items = {};
    if (profile) {

        // console.log(profile.trash.length);
        // console.log(profile.trash.group);
        profile.trash.forEach((tr) => {
            // console.log(tr);
            if (items[tr.type_of_trash]) {
                items[tr.type_of_trash].emission = items[tr.type_of_trash].emission + tr.emission_prevented;
                items[tr.type_of_trash].mass = items[tr.type_of_trash].mass + tr.mass;
            } else {
                items[tr.type_of_trash] = {}
                items[tr.type_of_trash].emission = tr.emission_prevented;
                items[tr.type_of_trash].mass = tr.mass;
            }
        })
        // items = profile.trash.group((tr: Product)=>tr.type_of_trash);
        // console.log(items);
    }
    const trashMap = ['PAPIER', 'SZKŁO', 'PLASTIK', 'BIO', 'ZMIESZANE'];

    return profile && (
        <Container maxWidth="md" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 4,
        }}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

                <img
                    src={profile.profile.image_url}
                    alt="Profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        margin: 'auto',
                        marginBottom: 16
                    }}
                />
                <Typography variant="h6" gutterBottom>
                    Witaj {profile.profile.display_name}
                </Typography>
            </div>

            {profile.profile.total_saved_mass && <Typography variant="h6" gutterBottom>
                Całkowita waga: {massConverter(profile.profile.total_saved_mass)}
            </Typography>}

            {profile.profile.total_prevented_co2 && <Typography variant="h6" gutterBottom>
                Całkowita zmniejszona emisja CO<sub>2</sub>:  {massConverter(profile.profile.total_prevented_co2)}
            </Typography>}
            <Container sx={{marginBottom: 2}}>
                {Object.keys(items).map((key, index) => (
                    <TrashPaper type={trashMap[key]} color={colorStringMap[key]} {...items[key]}></TrashPaper>
                ))}
            </Container>
            <Link style={{marginBottom: '16px'}} to={'/dashboard/userHistory'}>Pokaż historię</Link>
        </Container>
    )

}
