import {useEffect, useState} from "react";
import {UserApi} from "../../api/userApi";
import Mapa from '../../imgs/975px-Poznań_outline_map.svg.png'

export const PoznanStats = () => {
    const [poznanStats, setPoznanStats] = useState(null);
    useEffect(() => {
        const getUserStats = async () => {
            try {
                const data = await UserApi.getPoznanStats();
                setPoznanStats(data);
            } catch (e) {
            }
        }
        getUserStats();
    }, [])
    return (

        <div style={{padding: '16px', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <p>W całym mieście poddano recyklingowi 220kg odpadów</p>
            <p>To pozwoliło na zmniejszenie śladu węglowego aż o <b>69 kg!</b></p>
            <img src={Mapa} width={'100%'} style={{opacity: 0.2, display: 'absolute', top: '50%', bottom: '50%'}}/>
        </div>)
}