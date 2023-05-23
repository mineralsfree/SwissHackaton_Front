import React, {useState} from "react";
import Html5QrcodePlugin from "../Html5QrcodeScannerPlugin";
import {Html5QrcodeScanner, Html5QrcodeScanType, Html5QrcodeSupportedFormats} from "html5-qrcode";
import AlertDialogSlide from "../AlertDialog/AlertDialog";
import {Product} from "../../types/types";
import {trashApi} from "../../api/trashApi";


export const ScanScreen = () => {
    const [product, setProduct] = useState<null | Product>(null)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setProduct(null)
    };

    const handleClose = () => {
        setOpen(false);
        setProduct(null);
    };
    const onNewScanResult = async (scan: string, html5QrcodeScanner: Html5QrcodeScanner) => {
        if (html5QrcodeScanner.getState()){
            console.log(html5QrcodeScanner.getState());
        }
        if( html5QrcodeScanner.getState() === 2){
            html5QrcodeScanner.pause(true);
        }
        try {
            const product = await trashApi.checkEAN(scan)
            if (product) {
                setProduct(product.product);
                setOpen(true);
            }
        } catch (e){
            setProduct(null);
        }



    }
    return (
        <div className="App">
            {!product && <Html5QrcodePlugin
                fps={30}
                formatsToSupport={[Html5QrcodeSupportedFormats.EAN_13]}
                // qrbox={{width: 400, height: 200}}
                supportedScanTypes={[Html5QrcodeScanType.SCAN_TYPE_CAMERA]}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />}

            {product && <AlertDialogSlide handleClose={handleClose} open={open} product={product}></AlertDialogSlide>}

            {/*{state}*/}
            {/*<BottomNavBar></BottomNavBar>*/}
        </div>
    );

}