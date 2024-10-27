import React from 'react';
import SimulatorWebcam from "./Utilities/SimulatorWebcam.jsx";
import './SubjectExerciseQuestion.css';
import ReactDOMServer from 'react-dom/server';
import { ArcherContainer, ArcherElement } from "react-archer";
import HS_A from '../assets/hand_signs/HS-A.png';
import HS_B from '../assets/hand_signs/HS-B.png';
import HS_C from '../assets/hand_signs/HS-C.png';
import HS_D from '../assets/hand_signs/HS-D.png';
import HS_E from '../assets/hand_signs/HS-E.png';
import HS_F from '../assets/hand_signs/HS-F.png';
import HS_G from '../assets/hand_signs/HS-G.png';
import HS_H from '../assets/hand_signs/HS-H.png';
import HS_I from '../assets/hand_signs/HS-I.png';
import HS_J from '../assets/hand_signs/HS-J.png';
import HS_K from '../assets/hand_signs/HS-K.png';
import HS_L from '../assets/hand_signs/HS-L.png';
import HS_M from '../assets/hand_signs/HS-M.png';
import HS_N from '../assets/hand_signs/HS-N.png';
import HS_O from '../assets/hand_signs/HS-O.png';
import HS_P from '../assets/hand_signs/HS-P.png';
import HS_Q from '../assets/hand_signs/HS-Q.png';
import HS_R from '../assets/hand_signs/HS-R.png';
import HS_S from '../assets/hand_signs/HS-S.png';
import HS_T from '../assets/hand_signs/HS-T.png';
import HS_U from '../assets/hand_signs/HS-U.png';
import HS_V from '../assets/hand_signs/HS-V.png';
import HS_W from '../assets/hand_signs/HS-W.png';
import HS_X from '../assets/hand_signs/HS-X.png';
import HS_Y from '../assets/hand_signs/HS-Y.png';
import HS_Z from '../assets/hand_signs/HS-Z.png';

function SubjectExerciseQuestion(args) {
    const handSignImages = {
            '../assets/hand_signs/HS-A.png': HS_A,
            '../assets/hand_signs/HS-B.png': HS_B,
            '../assets/hand_signs/HS-C.png': HS_C,
            '../assets/hand_signs/HS-D.png': HS_D,
            '../assets/hand_signs/HS-E.png': HS_E,
            '../assets/hand_signs/HS-F.png': HS_F,
            '../assets/hand_signs/HS-G.png': HS_G,
            '../assets/hand_signs/HS-H.png': HS_H,
            '../assets/hand_signs/HS-I.png': HS_I,
            '../assets/hand_signs/HS-J.png': HS_J,
            '../assets/hand_signs/HS-K.png': HS_K,
            '../assets/hand_signs/HS-L.png': HS_L,
            '../assets/hand_signs/HS-M.png': HS_M,
            '../assets/hand_signs/HS-N.png': HS_N,
            '../assets/hand_signs/HS-O.png': HS_O,
            '../assets/hand_signs/HS-P.png': HS_P,
            '../assets/hand_signs/HS-Q.png': HS_Q,
            '../assets/hand_signs/HS-R.png': HS_R,
            '../assets/hand_signs/HS-S.png': HS_S,
            '../assets/hand_signs/HS-T.png': HS_T,
            '../assets/hand_signs/HS-U.png': HS_U,
            '../assets/hand_signs/HS-V.png': HS_V,
            '../assets/hand_signs/HS-W.png': HS_W,
            '../assets/hand_signs/HS-X.png': HS_X,
            '../assets/hand_signs/HS-Y.png': HS_Y,
            '../assets/hand_signs/HS-Z.png': HS_Z
        };

    const props = {
        id: args.id,
        subjectExerciseId: args.subjectExerciseId,
        points: args.points,
        text: args.text,
        type: args.type, // Multiple Choice, Matching, Simulation Video
        answerOptions: args.answerOptions,
        correctAnswer: args.correctAnswer,
        feedback: args.feedback,
        isAnswered: false,
        isCorrect: false
    }

    let handleAnswer = (answer) => {
        props.isAnswered = true;
        props.isCorrect = (answer === this.correctAnswer);
    };

    const DefineMultipleChoiceContent = () => {
        return (
            <div>
                <h3>{props.text}</h3>
                <div>
                    {props.answerOptions.map((option, index) => (
                        <div key={index}>
                            <input type="radio" id={`option-${index}`} name="answer" value={option.text}/>
                            <label htmlFor={`option-${index}`}>
                                <img src={handSignImages[option.image]} className="image"/>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    const DefineSimulationVideoContent = () => {
        return (
            <div>
                <h3>{props.text}</h3>
                { new SimulatorWebcam(props.correctAnswer) }
            </div>
        );
    };
    const DefineMatchingContent = () => {
        const [matches, setMatches] = React.useState([]);
        let [selectedLabelIndex, setSelectedLabelIndex] = React.useState(-1);
        let [selectedImageIndex, setSelectedImageIndex] = React.useState(-1);

        const handleLabelClick = (labelIndex) => {
            selectedLabelIndex = labelIndex;
            checkMatch();
        }

        const handleImageClick = (imageIndex) => {
            selectedImageIndex = imageIndex;
            checkMatch();
        }

        const checkMatch = () => {
            if (selectedLabelIndex > -1 && selectedImageIndex > -1) {
                setMatches([...matches, { label: selectedLabelIndex, image: selectedImageIndex }]);

                selectedLabelIndex = -1;
                selectedImageIndex = -1;
            }
        }

        return (
            <div>
                <h3>{props.text}</h3>
                <ArcherContainer strokeColor="black">
                    <div id="matching-container">
                        <div id="labels">
                            {props.answerOptions.map((option, index) => (
                                <ArcherElement
                                    key={index}
                                    id={`label-${index}`}
                                    relations={matches.filter(match => match.label === index).map(filteredMatch => ({
                                        targetId: `image-${filteredMatch.image}`,
                                        targetAnchor: 'left',
                                        sourceAnchor: 'right'
                                    }))}>
                                    <button
                                        className={`label ${selectedLabelIndex === index ? "selected" : ""}`}
                                        onClick={() => handleLabelClick(index)}>
                                        {option.label}
                                    </button>
                                </ArcherElement>
                            ))}
                        </div>

                        <div id="images">
                            {props.answerOptions.map((option, index) => (
                                <ArcherElement
                                    key={index}
                                    id={`image-${index}`}
                                    /*relations={matches.filter(match => match.image === index).map(filteredMatch => ({
                                        targetId: `label-${filteredMatch.label}`,
                                        targetAnchor: 'right',
                                        sourceAnchor: 'left'
                                    }))}*/>
                                    <button
                                        className={`image ${selectedImageIndex === index ? 'selected' : ''}`}
                                        onClick={() => handleImageClick(index)}>
                                        <img src={handSignImages[option.image]} className="image" />
                                    </button>
                                </ArcherElement>
                            ))}
                        </div>
                    </div>
                </ArcherContainer>
            </div>
        );
    }

    switch (props.type) {
        case 'MultipleChoice':
            return <DefineMultipleChoiceContent />;
        case 'SimulationVideo':
            return <DefineSimulationVideoContent />;
        case 'Matching':
            return <DefineMatchingContent />;

        default:
            return <div>Unsupported question type</div>;
    }
}

export default SubjectExerciseQuestion;