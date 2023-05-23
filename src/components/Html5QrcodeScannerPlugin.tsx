// file = Html5QrcodePlugin.jsx
import {Html5QrcodeScanner, Html5QrcodeScanType} from 'html5-qrcode';
import {useEffect} from 'react';
import {Html5QrcodeSupportedFormats} from "html5-qrcode";

const qrcodeRegionId = "reader";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config: any = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    if (props.formatsToSupport) {
        config.formatsToSupport = props.formatsToSupport;
    }
    if (props.supportedScanTypes){
        config.supportedScanTypes = props.supportedScanTypes;
    }
    config.useBarCodeDetectorIfSupported = true;
    config.rememberLastUsedCamera = true;
    config.facingMode = 'environment';
    config.qrbox = {width: 300, height: 200}

    return config;
};

interface IHtml5QrcodePlugin {
    fps: number;
    qrbox?: { width: number, height: number };
    disableFlip: boolean;
    qrCodeSuccessCallback: (str: string, html5QrcodeScanner) => void;
    verbose?: boolean;
    qrCodeErrorCallback?: (str: string) => void;
    formatsToSupport?: Array<Html5QrcodeSupportedFormats>
    supportedScanTypes?: Array<Html5QrcodeScanType>
}

const Html5QrcodePlugin = (props: IHtml5QrcodePlugin) => {

    useEffect(() => {
        console.log('render QR')
        // when component mounts
        const config = createConfig(props);
        // const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, false);

        html5QrcodeScanner.render((str)=>{props.qrCodeSuccessCallback(str, html5QrcodeScanner)}, props.qrCodeErrorCallback, );

        // cleanup function when component will unmount
        return () => {
            // html5QrcodeScanner.pause(true);
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, [props]);

    return (
        <div id={qrcodeRegionId}/>
    );
};

export default Html5QrcodePlugin;