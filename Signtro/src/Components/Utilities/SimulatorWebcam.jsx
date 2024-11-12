import React, { Component } from 'react';
import Webcam from "react-webcam";

function SimulatorWebcam(correctAnswer) {
    const WebcamCapture = () => {
        const webcamRef = React.useRef(null);
        const [imgSrc, setImgSrc] = React.useState(null);
        const [isVisible, setIsVisible] = React.useState(false);

        React.useEffect(() => {
            const interval = setInterval(() => {
                const webcam = document.getElementById("webcam");
                if (webcam === null) {
                    return;
                }

                const videoValue = document.getElementById("videoValue");
                videoValue.value = correctAnswer;

                const imageSrc = webcamRef.current.getScreenshot();
                setImgSrc(imageSrc);
            }, 5000);

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
                <input type="text" id="videoValue" readOnly />
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