import {Container, Paper} from "@mui/material";
import {BackendProduct} from "../../types/types";
import img from '../../imgs/image.png';
import {massConverter} from "../../helpers/massHelper";
import {colorStringMap} from "./UserDash";
import {useEffect, useState} from "react";
import {UserApi} from "../../api/userApi";
import BackButton from "../BackButton/BackButton";

export const UserHistory = (props) => {
    const [trash, setTrash] = useState(null);
    useEffect(() => {
        const getUserStats = async () => {
            try {
                const data = await UserApi.getProfile();
                setTrash(data.trash);
            } catch (e) {
            }
        }
        getUserStats();
    }, [])
    return trash && (<div>
            <BackButton/>
            {trash.length === 0 && (<p>Nie wyrzuciłeś jeszcze żadnego smiecia</p>)}
            {trash.map((tr: BackendProduct) => {
            const color = colorStringMap[tr.type_of_trash];
            console.log(color);
            return (<>
                    <Container sx={{padding: '4px 8px'}}>
                        <Paper elevation={6}
                               sx={{display: 'flex', border: '1px solid ' + color, padding: 1}}>
                            <img src={tr.image_url} style={{paddingRight: '15px'}}  height={140}/>
                            <div>
                                <p>Waga: {massConverter(tr.mass)}</p>
                                <p>Zmniejszono emisję CO<sub>2</sub> o: {massConverter(tr.emission_prevented)}</p>
                            </div>
                        </Paper>
                    </Container>
                </>


            )

        })}</div>
    )
}