import React, { Component } from 'react';
import Webcam from "react-webcam";
import { uploadImage } from '../../api/ApiService';
import "./SimulatorWebcam.css"

function SimulatorWebcam(correctAnswer) {
    const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
        const [imgSrc, setImgSrc] = React.useState(null);
        const [isVisible, setIsVisible] = React.useState(false);
        const [captureResult, setCaptureResult] = React.useState(null);
        const [detectedAccuracy, setDetectedAccuracy] = React.useState(0);
        const [targetAccuracy, setTargetAccuracy] = React.useState(0);


        React.useEffect(() => {
            const interval = setInterval(async () => {
                const webcam = document.getElementById("webcam");
                if (webcam === null) {
                    return;
                }

                // const videoValue = document.getElementById("videoValue");
                // videoValue.value = correctAnswer;

                const imageSrc = webcamRef.current.getScreenshot();
                setImgSrc(imageSrc);

                try {
                    const { result, detectedAccuracy, targetAccuracy } = await uploadImage(imageSrc, correctAnswer);
                    setCaptureResult(result);
                    setDetectedAccuracy(detectedAccuracy)
                    setTargetAccuracy(targetAccuracy)
                    console.log(result, detectedAccuracy, targetAccuracy);
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            }, 200);

            return () => clearInterval(interval);
        }, []);

        const videoConstraints = {
            width: 600,
            height: 450,
            facingMode: "user"
        };

        const playWebcam = () => {
            setIsVisible(true);
        }

        const pauseWebcam = () => {
            setIsVisible(false);
        }

        return (
            <div className={"webcam-container"}>
                {/* <input type="text" id="videoValue" readOnly /> */}
                {isVisible && <Webcam
                    audio={false}
                    id={"webcam"}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={600}
                    height={450}
                    audioConstraints={false}
                    muted={false}
                    videoConstraints={videoConstraints}/>}
                <div className={'result-container'}>
                    <div className={"result"}>Target: {correctAnswer}</div>
                    <div className={"result"}>Detected: {captureResult}</div>
                </div>
                <div className={'result-container'}>
                    <div className={"result"}>Accuracy: {targetAccuracy}</div>
                    <div className={"result"}>Accuracy: {detectedAccuracy}</div>
                </div>
                {/* {captureResult && <div>Result: {captureResult}</div>}
                <div>Accuracy: {resultAccuracy}</div> */}
                {!isVisible && <div className={"webcam-placeholder"}>
                    <p>Webcam is currently disabled.</p>
                </div>}
                <div className={"webcam-buttons"}>
                    <button onClick={playWebcam}>Play Webcam</button>
                    <button onClick={pauseWebcam}>Pause Webcam</button>
                </div>
            </div>
        );
    };

    return <WebcamCapture/>;
}

export default SimulatorWebcam;