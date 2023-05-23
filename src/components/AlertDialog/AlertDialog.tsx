import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {Product} from "../../types/types";
import blue from '../../imgs/niebieski.png';
import green from '../../imgs/zielony.png';
import yellow from '../../imgs/zolty.png';
import brown from '../../imgs/brazowy.png';
import black from '../../imgs/czarny.png'

import {useNavigate} from "react-router-dom";
import {trashApi} from "../../api/trashApi";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface IAlertDialogSlideProps {
    product: Product
    open: boolean;
    handleClose: () => void;
}

const colorMap = [blue, green, yellow, brown, black];
const colorStringMap = ['niebieskiego', 'zielonego', 'żoltego', 'brązowego']

export default function AlertDialogSlide(props: IAlertDialogSlideProps) {
    const {product, open, handleClose} = props;

    const navigate = useNavigate()
    return (
        <div>
            <Dialog
                fullScreen
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Jesteś w trakcie wyrzucania smecia"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Chcesz Wyrzucić {product?.name}?
                        Wyrzuć ją do {colorStringMap[product.type_of_trash]} kosza
                        <img src={product.img} width={100}/>
                        <img width={200} src={colorMap[product.type_of_trash]}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        handleClose()
                    }}>Dzięki za info</Button>
                    <Button onClick={async () => {
                        try {
                            console.log(product);
                             await trashApi.throwTrash(product.ean);
                            navigate("/dashboard/user");

                        } catch (e) {
                        }
                        handleClose()
                    }}>Wyrzuciłem</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}