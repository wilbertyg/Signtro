import {useEffect, useState} from "react";
import GetService from "../../helpers/GetService.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Image, Placeholder, Row, Stack} from "react-bootstrap";
import './CourseExerciseQuestion.css';
import SimulatorWebcam from "../Simulator/SimulatorWebcam.jsx";
import SimulatorMatching from "../Simulator/SimulatorMatching.jsx";

function CourseExerciseQuestion(data) {
    useEffect(() => {
        document.title = 'Exercise Question | Signtro';
    }, []);

    const {data: questionContent, isPending, error} = GetService(`/exercise_questions/${data.id}`);
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = () => {
        navigate('/courses');
    }

    const handleFinish = () => {
        navigate('/courses/exercises', {
            state:
                {
                    id: location.state.id,
                    exercise_id: location.state.exercise_id,
                    question_id: data.id,
                    questions_length: data.questions_length,
                    icon: location.state.icon,
                    finished: true
                }
        });
    }
    let index = data.ids.indexOf(data.id);

    const handlePrevIndex = () => {
        if (index === 0) {
            return;
        }

        navigate('/courses/exercises', {
            state:
                {
                    id: location.state.id,
                    exercise_id: location.state.exercise_id,
                    question_id: data.ids[index - 1],
                    questions_length: data.questions_length,
                    icon: location.state.icon,
                    question_ids: data.ids,
                    finished: false
                }
        });
        window.location.reload();
    }

    const handleNextIndex = () => {
        if (index === data.ids.length - 1) {
            return;
        }

        navigate('/courses/exercises', {
            state:
                {
                    id: location.state.id,
                    exercise_id: location.state.exercise_id,
                    question_id: data.ids[index + 1],
                    questions_length: data.questions_length,
                    icon: location.state.icon,
                    question_ids: data.ids,
                    finished: false
                }
        });
        window.location.reload();
    }

    const [answer, setAnswer] = useState('');
    const [visible, setVisible] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const saveAnswer = () => {
        switch (questionContent.type) {
            case "Multiple":
                console.log("[INFO] Selected answer: ", answer);

                setIsCorrect(questionContent.correct_answer === answer);
                break;
            case "Simulation":
                const predictionResult = document.getElementById("prediction-result");
                if (predictionResult.textContent === '?') {
                    setAnswer('');
                    console.log("[INFO] Selected answer: ", "No answer detected.");

                    setIsCorrect(false);
                }
                else {
                    setAnswer(predictionResult.textContent);
                    console.log("[INFO] Selected answer: ", predictionResult.textContent)

                    setIsCorrect(questionContent.correct_answer === predictionResult.textContent);
                }
                break;
            case "Matching":
                const matchingData = document.getElementById("matching-data");
                if (matchingData.textContent === '') {
                    console.log("[INFO] Selected answer: ", "No matches detected.");

                    setIsCorrect(false);
                    break;
                }

                const matches = JSON.parse(matchingData.textContent);

                let isFullyMatched = false;

                for (let i = 0; i < questionContent.correct_answer.length; i++) {
                    const correctMatch = questionContent.correct_answer[i];
                    const existingMatch = matches.find(match => match.label === correctMatch.label);

                    if (existingMatch && existingMatch.image === correctMatch.image) {
                        isFullyMatched = true;
                    }
                    else {
                        isFullyMatched = false;
                    }
                }

                setIsCorrect(isFullyMatched);
                break;
        }

        setVisible(true);
    }

    const MultipleContent = () => {
        return (
            questionContent.answer_options.map((option, index) => (
                <div key={index}
                     className={`answer-option-item ${answer === option.text ? "answer-option-selected" : ""}`}
                     onClick={() => setAnswer(option.text)}>
                    <Image src={"/asset-bulks/hand-signs/" + option.image} alt="Image"/>
                </div>
            ))
        );
    }

    const SimulationContent = () => {
        return (
            new SimulatorWebcam(questionContent.correct_answer)
        );
    }

    const MatchingContent = () => {
        const labels = questionContent.answer_options.map((option) => option.label);
        const images = questionContent.answer_options.map((option) => option.image);

        return (
            new SimulatorMatching(labels, images)
        );
    }

    const FittingContent = () => {
        switch (questionContent.type) {
            case "Multiple":
                return <MultipleContent />
            case "Simulation":
                return <SimulationContent />
            case "Matching":
                return <MatchingContent />
        }
    }

    return (
        <>
            {isPending &&
                <Stack direction="vertical" className="align-items-center justify-content-evenly" gap={3} style={{margin: '25px 100px'}}>
                    <Row md={6} className="question-list-container" style={{width: '42.5vw'}}>
                        {data.ids.map((id) => (
                            <Placeholder.Button variant="dark" xs={3} style={{width: '40px', height: '40px', margin: '10px'}}/>
                        ))}
                    </Row>
                    <Col md={6} className="exercise-question-container">
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                        </Placeholder>

                        <Placeholder as="p" animation="glow" style={{margin: '15px 0px'}}>
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '30px'}}>
                            <Placeholder.Button variant="primary" xs={3} />
                            <Placeholder.Button variant="success" xs={3} />
                            <Placeholder.Button variant="primary" xs={3} />
                        </Stack>
                    </Col>
                </Stack>
            }
            {!isPending &&
                <Stack direction="vertical" className="align-items-center justify-content-evenly" gap={3} style={{margin: '25px 100px'}}>
                    <Row md={6} className="question-list-container" style={{width: '42.5vw'}}>
                        {data.ids.map((id, index) => (
                            <Button className={`btn-primary exercise-button fs-5 ${ id === data.id ? "exercise-button-selected" : ""}`}
                                    onClick={() => {
                                        navigate('/courses/exercises', {
                                            state:
                                                {
                                                    id: location.state.id,
                                                    exercise_id: location.state.exercise_id,
                                                    question_id: id,
                                                    questions_length: data.ids.length,
                                                    icon: location.state.icon,
                                                    question_ids: data.ids,
                                                    finished: false
                                                }
                                        });
                                        window.location.reload();
                                    }}>
                                {index + 1}
                            </Button>
                        ))}
                    </Row>
                    <Col md={6} className="exercise-question-container" style={{width: '42.5vw'}}>
                        <p className="lead fw-semibold text-start" style={{marginBottom: '25px'}}>
                            {questionContent.text}
                        </p>
                        <Stack direction="horizontal" className="align-items-center justify-content-evenly">
                            {FittingContent()}
                        </Stack>
                        <p className="lead fw-semibold text-center" style={{margin: '25px 0px', color: isCorrect ? "green" : "red"}}>
                            {visible && isCorrect &&
                                "Correct!"
                            }
                            {visible && !isCorrect &&
                                "Incorrect!"
                            }
                        </p>
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '30px'}}>
                            <Button variant={`${index === 0 ? "dark" : "primary"}`} className={`${index === 0 ? "disabled" : ""}`} style={{width: '75px'}} onClick={handlePrevIndex}>
                                Prev
                            </Button>
                            <Button variant="success" style={{width: '75px'}} onClick={saveAnswer}>
                                Save
                            </Button>
                            <Button variant={`${index === data.ids.length - 1 ? "dark" : "primary"}`} className={`${index === data.ids.length - 1 ? "disabled" : ""}`} style={{width: '75px'}} onClick={handleNextIndex}>
                                Next
                            </Button>
                        </Stack>
                    </Col>
                </Stack>
            }
        </>
    );
}

export default CourseExerciseQuestion;