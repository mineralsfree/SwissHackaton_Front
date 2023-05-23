import {Paper} from "@mui/material";

interface ITrashPaper {
    color: string;
    title: string;
    number: number;
}

export const TrashPaper = (props) => {
    const {color, title, number} = props
    return <Paper elevation={8} color={'green'}>
        {title} 

    </Paper>
}