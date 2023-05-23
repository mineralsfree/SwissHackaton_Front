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
            <p>W calym miaście zrecyclingowano 220kg odpady, tyle waży twoja stara</p>
            <p>To pozwolilo na zmniejszenie CO2 footprint o 69 kg</p>
            <img src={Mapa} width={'100%'} style={{opacity: 0.2, display: 'absolute', top: '50%', bottom: '50%'}}/>
        </div>)
}