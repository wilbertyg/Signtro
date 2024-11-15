import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Error from "../Error/Error.jsx";
import CourseExerciseOverview from "../../Components/Course-Exercise/CourseExerciseOverview.jsx";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import {Col, Container, Placeholder, Stack} from "react-bootstrap";
import CourseExerciseQuestion from "../../Components/Course-Exercise/CourseExerciseQuestion.jsx";
import GetService from "../../helpers/GetService.tsx";

function CourseExercise() {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.state === null) {
        return <Error />;
    }

    useEffect(() => {
        document.title = 'Course Exercise | Signtro';
    }, []);

    const {id, exercise_id, question_id, questions_length, icon, question_ids, finished} = location.state;

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Container fluid className="flex-grow-1 flex-column justify-content-center">
                <div style={{
                    backgroundImage: `url(${Background})`,
                    backgroundSize: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    opacity: 0.5,
                    width: '100%',
                    height: '100vh',
                    zIndex: -1
                }}/>
                {!question_id &&
                    <CourseExerciseOverview
                        id = {exercise_id}
                        icon = {icon}
                    />
                }
                {question_id &&
                    <CourseExerciseQuestion
                        id = {question_id}
                        ids = {question_ids}
                        questions_length = {questions_length}
                    />
                }
            </Container>
        </div>
    )
}

/*function ExerciseQuestion({id, ids, questions_length}) {
    const [currentAnswer, setCurrentAnswer] = useState(null);

    const {data: questionContent, isPending, error} = GetService(`/exercise_questions/${id}`);

    const handleBack = () => {
        navigate('/courses');
    }

    const handleFinish = () => {
        navigate('/courses/exercises', {
            state:
                {
                    id: location.state.id,
                    exercise_id: location.state.exercise_id,
                    question_id: id,
                    questions_length: questions_length,
                    icon: location.state.icon,
                    finished: true
                }
        });
    }

    const handlePrevIndex = () => {
        let index = ids.indexOf(id);

        if (index === 0) {
            return;
        }

        navigate('/courses/exercises', {
            state:
                {
                    id: location.state.id,
                    exercise_id: location.state.exercise_id,
                    question_id: ids[index - 1],
                    questions_length: questions_length,
                    icon: location.state.icon,
                    finished: false
                }
        });
    }

    const handleNextIndex = () => {
        let index = ids.indexOf(id);

        if (index === ids.length - 1) {
            return;
        }

        navigate('/courses/exercises', {
            state:
                {
                    id: location.state.id,
                    exercise_id: location.state.exercise_id,
                    question_id: ids[index + 1],
                    questions_length: questions_length,
                    icon: location.state.icon,
                    finished: false
                }
        });
    }

    const saveAnswer = () => {
        let answer = {
            question_id: id,
            answer: currentAnswer
        }

        let index = submitted_answers.findIndex((answer) => answer.question_id === id);

        if (index !== -1) {
            submitted_answers[index] = answer;
        }
        else {
            submitted_answers.push(answer);
        }
    }

    return (
        <>
            {isPending &&
                <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                    <Col md={6} className="course-container" style={{minHeight: '75vh'}}>
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
        </>
    );
}*/

export default CourseExercise;