import {useEffect, useRef, useState} from "react";
import ImagePredictionService from "../../helpers/ImagePredictionService.jsx";
import Webcam from "react-webcam";
import {Button, Card, Col, Image, Stack} from "react-bootstrap";
import './SimulatorWebcam.css';

import Visibility_On from "../../assets/icons/Visibility-On.svg";
import Visibility_Off from "../../assets/icons/Visibility-Off.svg";

function SimulatorWebcam(correctAnswer) {
    const WebcamCapture = () => {
        const webcamRef = useRef(null);
        const [isVisible, setIsVisible] = useState(false);

        const [captureResult, setCaptureResult] = useState('');
        const [detectedAccuracy, setDetectedAccuracy] = useState(0);
        const [targetAccuracy, setTargetAccuracy] = useState(0);

        useEffect(() => {
            const interval = setInterval(async () => {
                const webcam = document.getElementById("webcam");
                if (webcam === null) {
                    return;
                }

                const imageSrc = webcamRef.current.getScreenshot();

                try {
                    const {result, detectedAccuracy, targetAccuracy} = await ImagePredictionService(imageSrc, correctAnswer);

                    setCaptureResult(result);
                    setDetectedAccuracy(detectedAccuracy)
                    setTargetAccuracy(targetAccuracy)

                    console.log(result, detectedAccuracy, targetAccuracy);
                }
                catch (error) {
                    console.error('[ERROR] Failed uploading the image: ', error);
                }
            }, 200);

            return () => clearInterval(interval);
        }, []);

        const switchWebcamVisibility = () => {
            if (isVisible) {
                setIsVisible(false);
            }
            else {
                setIsVisible(true);
            }
        }

        return (
            <Card style={{width: '450px'}}>
                <Button variant="secondary" className="squashed-button" onClick={switchWebcamVisibility}>
                    {isVisible ? "DISABLE WEBCAM" : "ENABLE WEBCAM"}
                </Button>
                {!isVisible &&
                    <div className="webcam-placeholder">
                        <p className="fw-semibold">Webcam is currently disabled.</p>
                    </div>
                }
                {isVisible &&
                    <div className="webcam-live">
                        <Webcam
                            id="webcam"
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            audioConstraints={false}
                            muted={false}
                            style={{
                                width: '448.5px'
                            }}/>
                    </div>
                }
                <Card.Body style={{padding: '0rem 0rem'}}>
                    <Stack direction="horizontal" gap={0}>
                        <Col className="column-master left-side">
                            <h4 className="column-title">TARGET</h4>
                            <Stack direction="horizontal" className="column-child justify-content-evenly align-items-center">
                                <p className="column-text fw-bold fs-4 text-center text-truncate">{correctAnswer}</p>
                                <p className="column-text fw-bold fs-4 text-center">&nbsp;-&nbsp;</p>
                                <p className="column-text fw-bold fs-4 text-center text-truncate">{targetAccuracy}%</p>
                            </Stack>
                        </Col>
                        <Col className="column-master right-side">
                            <h4 className="column-title">DETECTED</h4>
                            <Stack direction="horizontal" className="column-child justify-content-evenly align-items-center">
                                <p id="prediction-result" className="column-text fw-bold fs-4 text-center text-truncate">{captureResult !== '' ? captureResult : '?'}</p>
                                <p className="column-text fw-bold fs-4 text-center">&nbsp;-&nbsp;</p>
                                <p className="column-text fw-bold fs-4 text-center text-truncate">{detectedAccuracy}%</p>
                            </Stack>
                        </Col>
                    </Stack>
                </Card.Body>
            </Card>
        );
    };

    return <WebcamCapture />;
}

export default SimulatorWebcam;