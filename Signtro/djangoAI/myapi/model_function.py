import joblib
import numpy as np
import mediapipe as mp
import cv2
import os

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
model = joblib.load(os.path.join(os.path.dirname(os.path.abspath(__file__)), "CNNModel.joblib"))
hands = mp_hands.Hands(min_detection_confidence=0.2, min_tracking_confidence=0.2)
actions = np.array(["a", "b", "c", "d", "e", "f", "g", "h", "i", 
                    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
                    "s", "t", "u", "v", "w", "x", "y", "z"])

def mediapipe_detection(image, model):
    # image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image.flags.writeable = False             
    results = model.process(image)               
    image.flags.writeable = True                  
    # image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
    return image, results

def extract_keypoints(results):
    lh = np.zeros(21*3)
    rh = np.zeros(21*3)
    visible = False
    if results.multi_hand_landmarks:
        visible = True
        for index, hand_landmarks in enumerate(results.multi_hand_landmarks):
            if results.multi_handedness[index].classification[0].index == 0:
                lh = np.array([[res.x, res.y, res.z] for res in
                    hand_landmarks.landmark]).flatten()
            else:
                rh = np.array([[res.x, res.y, res.z] for res in
                            hand_landmarks.landmark]).flatten()
    return np.concatenate([lh, rh]), visible

def predict(image, correctAns):
    image = np.array(image)
    image, results = mediapipe_detection(image, hands)
        
    keypoints, visible = extract_keypoints(results)
    if visible:
        keypoints = keypoints.reshape(keypoints.shape[0],)
        pred = model.predict(np.expand_dims(keypoints, axis=0))[0]
        # index = np.where(actions == correctAns.lower())[0][0]
        index = np.argmax(actions == correctAns.lower())
        # print(correctAns)
        res = np.argmax(pred)
        return actions[res].upper(), np.round(pred[res] * 100, 2), np.round(pred[index] * 100, 2)
    else:
        return "No hand visible", 0.0, 0.0