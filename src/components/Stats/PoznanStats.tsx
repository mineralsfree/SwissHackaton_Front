import {useEffect, useState} from "react";
import {UserApi} from "../../api/userApi";
import Mapa from '../../imgs/975px-Poznań_outline_map.svg.png'

export const PoznanStats = () => {
    const [poznanStats, setPoznanStats] = useState({
			total_saved_mass: 0,
			total_prevented_co2: 0,
		});
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
            <p>W całym mieście poddano recyklingowi {poznanStats?.total_saved_mass / 1000} kg odpadów</p>
            <p>To pozwoliło na zmniejszenie śladu węglowego aż o <b>{poznanStats?.total_prevented_co2 / 1000} kg!</b></p>
            <img src={Mapa} width={'100%'} style={{opacity: 0.2, display: 'absolute', top: '50%', bottom: '50%'}}/>
        </div>)
}
