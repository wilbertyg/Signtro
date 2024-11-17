import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Image, Placeholder, Row, Stack} from "react-bootstrap";
import './CourseExerciseQuestion.css';
import SimulatorWebcam from "../Simulator/SimulatorWebcam.jsx";
import SimulatorMatching from "../Simulator/SimulatorMatching.jsx";
import SimulatorChoices from "../Simulator/SimulatorChoices.jsx";

import Arrow_Forward from "../../assets/icons/Arrow-Forward.svg";
import Arrow_Back from "../../assets/icons/Arrow-Back.svg";
import Save from "../../assets/icons/Save.svg";

function CourseExerciseQuestion(question_ids) {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Exercise Question | Signtro';

        setTimeout(() => {
            const questionPromises = question_ids.map(id =>
                fetch(`http://localhost:3000/exercise_questions/${id}`)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Error fetching data');
                        }
                        return res.json();
                    })
            );

            Promise.all(questionPromises)
                .then(data => {
                    setQuestions(data);
                    setSelectedQuestion(data[0]);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    const handleBack = () => {
        navigate('/courses/exercises', {
            state:
                {
                    status: "overview",
                    exercise_id: location.state.exercise_id,
                    icon: location.state.icon
                }
        });
        window.location.reload();
    }

    const handleFinish = () => {
        const hiddenAnswers = document.getElementById("hiddenAnswers");
        let answers = hiddenAnswers.textContent !== '' ? JSON.parse(hiddenAnswers.textContent) : [];

        navigate('/courses/exercises', {
            state:
                {
                    status: "result",
                    exercise_id: location.state.exercise_id,
                    question_ids: question_ids,
                    answers: answers,
                    icon: location.state.icon
                }
        });
        window.location.reload();
    }

    const getIndex = () => {
        return question_ids.indexOf(selectedQuestion.id);
    }

    const handlePrevIndex = () => {
        let index = getIndex();
        if (index === 0) {
            return;
        }

        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
        }, 1000);

        setSelectedQuestion(questions[index - 1]);
        document.getElementById("currentAnswer").textContent = '';
    }

    const handleNextIndex = () => {
        let index = getIndex();
        if (index === question_ids.length - 1) {
            return;
        }

        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
        }, 1000);

        setSelectedQuestion(questions[index + 1]);
        document.getElementById("currentAnswer").textContent = '';
    }

    const handleSelectQuestion = (id) => {
        setIsPending(true);
        setTimeout(() => {
            setIsPending(false);
        }, 1000);

        setSelectedQuestion(questions.find(question => question.id === id));
        document.getElementById("currentAnswer").textContent = '';
    }

    const saveAnswer = () => {
        const hiddenAnswers = document.getElementById("hiddenAnswers");
        const currentAnswer = document.getElementById("currentAnswer");

        let answers = hiddenAnswers.textContent !== '' ? JSON.parse(hiddenAnswers.textContent) : [];
        let existingAnswer = hiddenAnswers.textContent !== '' ? answers.find(ans => ans.question_id === selectedQuestion.id) : null;

        if (!existingAnswer) {
            answers.push({
                question_id: selectedQuestion.id,
                answer: selectedQuestion.type !== "Matching" ? currentAnswer.textContent : (
                    currentAnswer.textContent !== '' ? JSON.parse(currentAnswer.textContent) : [])
            });
        }
        else {
            existingAnswer.answer = selectedQuestion.type !== "Matching" ? currentAnswer.textContent : (
                currentAnswer.textContent !== '' ? JSON.parse(currentAnswer.textContent) : []);
        }

        hiddenAnswers.textContent = JSON.stringify(answers);
        alert("Answer saved!");
    }

    const getAnswer = () => {
        const hiddenAnswers = document.getElementById("hiddenAnswers");

        let answers = hiddenAnswers.textContent !== '' ? JSON.parse(hiddenAnswers.textContent) : [];
        let existingAnswer = hiddenAnswers.textContent !== '' ? answers.find(ans => ans.question_id === selectedQuestion.id) : null;

        return existingAnswer ? existingAnswer.answer : '';
    }

    return (
        <>
            {isPending &&
                <Stack direction="vertical" className="align-items-center justify-content-evenly" gap={3} style={{margin: '25px 100px'}}>
                    <Row className="justify-content-between" style={{width: '42.5vw'}}>
                        <Placeholder.Button variant="dark" xs={3} />
                        <Placeholder.Button variant="dark" xs={3} />
                    </Row>
                    <Row md={6} className="question-list-container" style={{width: '42.5vw'}}>
                        {question_ids.map((id) => (
                            <Placeholder.Button key={id} variant="dark" xs={3} style={{width: '40px', height: '40px', margin: '10px 13px 10px 10px'}}/>
                        ))}
                    </Row>
                    <Col md={6} className="exercise-question-container" style={{width: '42.5vw'}}>
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
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '30px'}} gap={2}>
                            <Placeholder.Button variant="primary" xs={3} />
                            <Placeholder.Button variant="danger" xs={3} />
                            <Placeholder.Button variant="primary" xs={3} />
                        </Stack>
                    </Col>
                </Stack>
            }
            {!isPending && selectedQuestion &&
                <Stack direction="vertical" className="align-items-center justify-content-evenly" gap={3} style={{margin: '25px 100px'}}>
                    <Row className="justify-content-between" style={{width: '42.5vw'}}>
                        <Button variant="primary" style={{width: '150px'}} onClick={handleBack}>
                            Go to overview
                        </Button>
                        <Button variant="primary" style={{width: '150px'}} onClick={handleFinish}>
                            Finish exercise
                        </Button>
                    </Row>
                    <Row md={6} className="question-list-container" style={{width: '42.5vw'}}>
                        {question_ids.map((id, index) => (
                            <Button key={id} className={`btn-primary exercise-button fs-5 ${id === selectedQuestion.id ? "exercise-button-selected" : ""}`}
                                    onClick={() => handleSelectQuestion(id)}>
                                {index + 1}
                            </Button>
                        ))}
                    </Row>
                    <Col md={6} className="exercise-question-container" style={{width: '42.5vw'}}>
                        <p className="lead fw-semibold text-start" style={{marginBottom: '25px'}}>
                            {selectedQuestion.text}
                        </p>
                        <p id="currentAnswer" className="hidden-element"></p>

                        <Stack direction="horizontal" className="align-items-center justify-content-center">
                            {selectedQuestion.type === "Multiple" &&
                                new SimulatorChoices(getAnswer(),
                                    selectedQuestion.answer_options)
                            }
                            {selectedQuestion.type === "Simulation" &&
                                new SimulatorWebcam(getAnswer(),
                                    selectedQuestion.correct_answer)
                            }
                            {selectedQuestion.type === "Matching" &&
                                new SimulatorMatching(getAnswer(),
                                    selectedQuestion.answer_options.map((option) => option.label),
                                    selectedQuestion.answer_options.map((option) => option.image))
                            }
                        </Stack>

                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '30px'}} gap={2}>
                            <Button
                                variant={`${getIndex() === 0 ? "dark" : "primary"}`}
                                className={`${getIndex() === 0 ? "disabled" : ""}`}
                                style={{width: '100px'}}
                                onClick={handlePrevIndex}>
                                Previous
                            </Button>
                            <Button variant="danger" style={{width: '100px'}} onClick={saveAnswer}>
                                Save
                            </Button>
                            <Button
                                variant={`${getIndex() === location.state.question_ids.length - 1 ? "dark" : "primary"}`}
                                className={`${getIndex() === location.state.question_ids.length - 1 ? "disabled" : ""}`}
                                style={{width: '100px'}}
                                onClick={handleNextIndex}>
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