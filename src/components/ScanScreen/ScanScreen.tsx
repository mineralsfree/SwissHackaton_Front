import React, {useState} from "react";
import Html5QrcodePlugin from "../Html5QrcodeScannerPlugin";
import {Html5QrcodeScanType, Html5QrcodeSupportedFormats} from "html5-qrcode";
import AlertDialogSlide from "../AlertDialog/AlertDialog";
import {Product} from "../../types/types";


const mockedData: Product[] = [{
    id: 1,
    EAN: '5902078000201',
    img: 'https://dlabiura24.pl/woda-cisowianka-niegazowana-15l-6szt,gdbfb,bgaa,bgaa.jpg',
    name: 'Woda Cisowianka',
    trashBinId: 2
}]
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
    const onNewScanResult = (scan: string) => {
        const product = mockedData.find((el) => el.EAN === scan);
        if (product) {
            setProduct(product);
            setOpen(true);
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