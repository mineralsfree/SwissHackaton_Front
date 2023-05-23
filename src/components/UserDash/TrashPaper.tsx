import {Paper} from "@mui/material";
import {massConverter} from "../../helpers/massHelper";

interface ITrashPaper {
    color: string;
    title: string;
    mass: number;
    type: string;
}

export const TrashPaper = (props: ITrashPaper) => {
    // console.log(props);
    const {color, title, mass, emission, type} = props
    return <Paper elevation={8} sx={{background: color, padding: 4}}>
        <div><b>{type}</b></div>
        {title}
        Emissions Prevented: {massConverter(mass)}
    <br/>
        Material recycled: {massConverter(emission)}
    </Paper>
}