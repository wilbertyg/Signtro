import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './DictionaryCamera.css';

export default function DictionaryCamera() {
  const webcamRef = useRef(null); 
  const [isCameraOn, setIsCameraOn] = useState(false); 

  const startCamera = () => {
    setIsCameraOn(true); 
  };

  const stopCamera = () => {
    setIsCameraOn(false); 
  };

  return (
    <div className="camera-container">
        <h1>Test it yourself!</h1>

        <div className="button-container">
        {!isCameraOn ? (
            <button onClick={startCamera} className="camera-button">
            Open Camera
            </button>
        ) : (
            <button onClick={stopCamera} className="camera-button">
            Close Camera
            </button>
        )}
        </div>

        {isCameraOn && (
        <div className="webcam-container">
            <Webcam ref={webcamRef} className="webcam-stream" />
        </div>
        )}
    </div>
);
}
