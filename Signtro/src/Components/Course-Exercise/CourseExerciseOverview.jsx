import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import GetService from "../../helpers/GetService.tsx";
import {Button, Col, Placeholder, Stack} from "react-bootstrap";
import './CourseExerciseOverview.css'

function CourseExerciseOverview() {
    const [exerciseContent, setExerciseContent] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [randomizedQuestions, setRandomizedQuestions] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    const {exercise_id} = location.state;

    useEffect(() => {
        document.title = 'Exercise Overview | Signtro';

        setTimeout(() => {
            fetch("http://localhost:3000/course_exercises/" + exercise_id)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching data');
                    }

                    return res.json();
                })
                .then(data => {
                    setExerciseContent(data);
                    setRandomizedQuestions(data.exercise_questions);
                    setIsPending(false);
                })
                .catch(err => {
                    setError(err.message);
                });
        }, 1000);
    }, []);

    const handleBack = () => {
        navigate('/courses');
        window.location.reload();
    }

    const handleBegin = () => {
        navigate('/courses/exercises', {
            state:
                {
                    status: "questions",
                    exercise_id: location.state.exercise_id,
                    question_ids: randomizedQuestions,
                    icon: location.state.icon
                }
        });
        window.location.reload();
    }

    return (
        <>
            {isPending &&
                <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                    <Col md={6} className="exercise-container" style={{minHeight: '75vh'}}>
                        <Placeholder as="h4" animation="glow" className="text-center" style={{marginBottom: '25px'}}>
                            <Placeholder xs={5} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3} /> <Placeholder xs={3} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3} /> <Placeholder xs={3} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3} /> <Placeholder xs={3} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as="h6" animation="glow">
                            <Placeholder xs={3} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow" style={{margin: '15px 0px'}}>
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '30px'}}>
                            <Placeholder.Button variant="dark" xs={3} />
                            <Placeholder.Button variant="primary" xs={3} />
                        </Stack>
                    </Col>
                </Stack>
            }
            {!isPending &&
                <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                    <Col md={6} className="exercise-container">
                        <h4 className="fs-3 fw-bold text-center" style={{marginBottom: '25px'}}>
                            {location.state.icon} {exerciseContent.title}
                        </h4>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Status:&nbsp;</b></p><p style={{color: 'limegreen'}}>{exerciseContent.status}</p>
                        </Stack>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Difficulty:&nbsp;</b></p><p>{exerciseContent.difficulty}</p>
                        </Stack>
                        <Stack direction="horizontal" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Remaining points to be gained:&nbsp;</b></p><p>{exerciseContent.points}</p>
                        </Stack>
                        <Stack direction="vertical" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Description:&nbsp;</b></p><p>{exerciseContent.description}</p>
                        </Stack>
                        <Stack direction="vertical" className="text-start">
                            <p style={{color: 'darkgray'}}><b>Prerequisite Exercises:&nbsp;</b></p>
                            <ul>
                                {exerciseContent.prerequisite_exercises.length === 0 &&
                                    <li>Tidak ada prasyarat</li>
                                }
                                {exerciseContent.prerequisite_exercises.length > 0 &&
                                    exerciseContent.prerequisite_exercises.map((ex, index) => (
                                        <li key={index}>
                                            {ex}
                                        </li>
                                ))}
                            </ul>
                        </Stack>
                        <Stack direction="horizontal" className="justify-content-between" style={{marginTop: '10px'}}>
                            <Button variant="secondary" style={{width: '150px'}} onClick={handleBack}>Back to courses</Button>
                            <Button variant="primary" style={{width: '150px'}} onClick={handleBegin}>Begin exercise!</Button>
                        </Stack>
                    </Col>
                </Stack>
            }
        </>
    );
}

export default CourseExerciseOverview;