import React, {useState} from "react";
import Html5QrcodePlugin from "../Html5QrcodeScannerPlugin";
import {Html5QrcodeScanType, Html5QrcodeSupportedFormats} from "html5-qrcode";
import AlertDialogSlide from "../AlertDialog/AlertDialog";
import {Product} from "../../types/types";
import {trashApi} from "../../api/trashApi";


const mockedData: Product[] = [{
    id: 1,
    ean: '5902078000201',
    img: 'https://dlabiura24.pl/woda-cisowianka-niegazowana-15l-6szt,gdbfb,bgaa,bgaa.jpg',
    name: 'Woda Cisowianka',
    type_of_trash: 2
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
    const onNewScanResult = async (scan: string) => {
        try {
            const product = await trashApi.checkEAN(scan)
            if (product) {
                setProduct(product);
                setOpen(true);
            }
        } catch (e){
            setProduct(null);
        }


        // const product = mockedData.find((el) => el.EAN === scan);

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