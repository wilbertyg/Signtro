import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Col, Container, Placeholder, Row, Stack} from "react-bootstrap";
import './CourseExerciseResult.css';

function CourseExerciseResult() {
    const [exerciseContent, setExerciseContent] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isChecked, setIsChecked] = useState(false);

    const [results, setResults] = useState([]);
    const [totalPoints, setTotalPoints] = useState(0);
    const [totalAnswers, setTotalAnswers] = useState(0);
    const [caption, setCaption] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Exercise Result | Signtro';

        setTimeout(() => {
            const exercisePromise = fetch("http://localhost:3000/course_exercises/" + location.state.exercise_id)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching data');
                    }

                    return res.json();
                })
            const questionPromises = location.state.question_ids.map(id =>
                fetch(`http://localhost:3000/exercise_questions/${id}`)
                    .then(res => {
                        if (!res.ok) {
                            throw Error('Error fetching data');
                        }
                        return res.json();
                    })
            );

            Promise.all([exercisePromise, Promise.all(questionPromises)])
                .then(([exerciseData, questionsData]) => {
                    if (results.length === 0) {
                        checkAnswers(exerciseData, questionsData);
                    }

                    setExerciseContent(exerciseData);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    const handleBack = () => {
        navigate('/courses');
        window.location.reload();
    }

    const handleRestart = () => {
        navigate('/courses/exercises', {
            state:
                {
                    status: "questions",
                    exercise_id: location.state.exercise_id,
                    question_ids: location.state.question_ids,
                    icon: location.state.icon
                }
        });
        window.location.reload();
    }

    const checkAnswers = (exerciseContent, questions) => {
        const answers = location.state.answers;
        let isCorrect = false;
        let currentTotalPoints = 0;
        let currentTotalAnswers = 0;

        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const answerItem = answers.find(ans => {
                return ans.question_id === question.id;
            });

            if (!answerItem) {
                results.push({
                    question_id: question.id,
                    feedback: "-",
                    is_correct: false
                });
                continue;
            }
            else if (question.type === "Multiple") {
                isCorrect = question.correct_answer === answerItem.answer;
            }
            else if (question.type === "Simulation") {
                isCorrect = question.correct_answer === answerItem.answer;
            }
            else if (question.type === "Matching") {
                let isFullyMatched = false;

                for (let i = 0; i < question.correct_answer.length; i++) {
                    const correctMatch = question.correct_answer[i];
                    const existingMatch = answerItem.answer.find(match => match.label === correctMatch.label);

                    if (existingMatch && existingMatch.image === correctMatch.image) {
                        isFullyMatched = true;
                    }
                    else {
                        isFullyMatched = false;
                    }
                }

                isCorrect = isFullyMatched;
            }

            results.push({
                question_id: question.id,
                feedback: question.feedback,
                is_correct: isCorrect
            });
            currentTotalPoints += isCorrect ? question.points : 0;
            currentTotalAnswers += 1;
        }

        let pointsPercentage = (currentTotalPoints / exerciseContent.points) * 100;
        if (pointsPercentage <= 30) {
            setCaption('Kurang banyak belajar!');
        }
        else if (pointsPercentage <= 60) {
            setCaption('Lumayan baik, coba tingkatkan lebih baik lagi!');
        }
        else if (pointsPercentage <= 90) {
            setCaption('Sudah sangat baik, tetap semangat!');
        }
        else if (pointsPercentage <= 100) {
            setCaption('Luar biasa, selamat!');
        }

        setTotalPoints(currentTotalPoints);
        setTotalAnswers(currentTotalAnswers);
        setIsChecked(true);
    }

    return (
        <>
            {!isChecked &&
                <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                    <Col md={6} className="result-container" style={{minHeight: '60vh'}}>
                        <Placeholder as="h4" animation="glow" className="text-center">
                            <Placeholder xs={5}/>
                        </Placeholder>
                        <Placeholder as="h6" animation="glow" className="text-center">
                            <Placeholder xs={5}/>
                        </Placeholder>
                        <hr style={{margin: '15px 0px'}}/>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3}/> <Placeholder xs={3}/>
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3}/> <Placeholder xs={3}/>
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3}/> <Placeholder xs={3}/>
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3}/>
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                            <Placeholder xs={12}/>
                        </Placeholder>
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '30px'}}>
                            <Placeholder.Button variant="dark" xs={3}/>
                            <Placeholder.Button variant="primary" xs={3}/>
                        </Stack>
                    </Col>
                </Stack>
            }
            {isChecked &&
                <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                    <Col md={6} className="result-container" style={{minHeight: '60vh'}}>
                        <h4 className="fs-3 fw-bold text-center">
                            {caption}
                        </h4>
                        <h6 className="fw-bold text-center" style={{color: 'darkgray'}}>
                            Kamu dapat {totalPoints} poin.
                        </h6>
                        <hr style={{margin: '15px 0px'}}/>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Finished exercise:&nbsp;</b></p><p className="fw-semibold">{exerciseContent.title}</p>
                        </Stack>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Number of answered question(s):&nbsp;</b></p><p>{totalAnswers} dari {results.length} pertanyaan</p>
                        </Stack>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Total points:&nbsp;</b></p><p>{totalPoints} / {exerciseContent.points}</p>
                        </Stack>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Examination:&nbsp;</b></p>
                        </Stack>
                        <Container fluid style={{padding: '0'}} className="examination-container">
                            <Row className="bg-primary examination-header-row">
                                <Col style={{borderRight: '1px solid darkgray'}} xs={2} className="examination-header-text">
                                    <p>
                                        NO
                                    </p>
                                </Col>
                                <Col xs={3} style={{borderRight: '1px solid darkgray'}} className="examination-header-text">
                                    <p>
                                        RESULT
                                    </p>
                                </Col>
                                <Col className="examination-header-text">
                                    <p>
                                        FEEDBACK
                                    </p>
                                </Col>
                            </Row>
                            {results.map((result, index) => (
                                <Row key={index} className={`examination-row ${index === results.length - 1 ? "last-row" : ""}`} style={{borderBottom: index !== results.length - 1 ? "1px solid darkgray" : ""}}>
                                    <Col xs={2} style={{borderRight: '1px solid darkgray'}} className="examination-item-number">
                                        <p>
                                            {index + 1}
                                        </p>
                                    </Col>
                                    <Col xs={3} style={{borderRight: '1px solid darkgray'}} className={`examination-item-result ${result.is_correct ? "examination-item-result-correct" : "examination-item-result-incorrect"}`}>
                                        <p>
                                            {result.is_correct ? "Correct" : "Incorrect"}
                                        </p>
                                    </Col>
                                    <Col className="examination-item-feedback fw-semibold">
                                        <p>
                                            {result.feedback}
                                        </p>
                                    </Col>
                                </Row>
                            ))}
                        </Container>
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '25px'}}>
                            <Button variant="primary" style={{width: '150px'}} onClick={handleBack}>Go to courses</Button>
                            <Button variant="primary" style={{width: '150px'}} onClick={handleRestart}>Try again!</Button>
                        </Stack>
                    </Col>
                </Stack>
            }
        </>
    );
}

export default CourseExerciseResult;