import Footer from "../../Components/Footer.jsx";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Col, Container, Placeholder, ProgressBar, Row, Stack, Button} from "react-bootstrap";
import GetRequest from "../../helpers/GetRequest";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import './Courses.css';

function Courses() {
    useEffect(() => {
        document.title = 'Courses | Signtro';
    }, []);

    const navigate = useNavigate();

    const {data: courses, isPending, error} = GetRequest('/courses');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    }

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
                {isPending &&
                    <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                        <Col>
                            {[1, 2, 3, 4].map(index => (
                                <Col className="course-container" style={{marginBottom: '20px'}}>
                                    <Row>
                                        <Placeholder as="h4" animation="glow">
                                            <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder as="h6" animation="glow">
                                            <Placeholder xs={3} /> <Placeholder xs={3} />
                                        </Placeholder>
                                        <Placeholder as={ProgressBar} animation="glow" bg="light" style={{margin: '10px 0px'}}>
                                            <Placeholder xs="12" />
                                        </Placeholder>
                                    </Row>
                                </Col>
                            ))}
                        </Col>
                        <Col md={6} className="course-container" style={{minHeight: '80vh'}}>
                            <Placeholder as="h4" animation="glow">
                                <Placeholder xs={5} /> <Placeholder xs={5} />
                            </Placeholder>
                            <Placeholder as="h6" animation="glow">
                                <Placeholder xs={3} /> <Placeholder xs={3} />
                            </Placeholder>
                            <Placeholder as="p" animation="glow" style={{margin: '15px 0px'}}>
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder>
                            <Placeholder as="h6" animation="glow" style={{margin: '15px 0px'}}>
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as="p" animation="glow" style={{margin: '15px 0px'}}>
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                                <Placeholder xs={12} />
                            </Placeholder>
                        </Col>
                    </Stack>
                }
                {!isPending &&
                    <Stack direction="horizontal" className="align-items-start justify-content-evenly" gap={5} style={{margin: '25px 100px'}}>
                        <Col>
                            {courses.map((crs, index) => (
                                <Col className="course-container course-card" onClick={() => handleCourseClick(crs)}>
                                    <Col>
                                        <h4 className={`fs-3 fw-bold text-start ${selectedCourse && selectedCourse.id === crs.id ? "selected-course" : ""}`}>
                                            {crs.name}
                                        </h4>
                                        <Stack direction="horizontal" className="fs-6 text-start align-items-center"
                                               style={{color: 'darkgray'}}>
                                            <p>Difficulty:&nbsp;</p><p><b>{crs.level}&nbsp;|&nbsp;</b></p>
                                            <p>Number of exercise(s):</p><span>&nbsp;</span><p>
                                            <b>{crs.course_exercises.length}</b></p>
                                        </Stack>
                                        <ProgressBar animated now={30} label={`${30 * 100 / crs.total_points}%`}/>
                                        {selectedCourse && selectedCourse.id === crs.id && selectedCourse.course_exercises.length > 0 &&
                                            <>
                                                <hr style={{margin: '20px 0px'}}/>
                                                <Col>
                                                    {crs.course_exercises.map((exercise, index) => (
                                                        <Button className="btn-primary exercise-button fs-5"
                                                                onClick={() => {
                                                                    navigate(`/courses?id=${crs.id}&exercise_id=${exercise.id}`);
                                                                    window.location.reload();
                                                                }}>
                                                            {exercise.icon}
                                                        </Button>
                                                    ))}
                                                </Col>
                                            </>
                                        }
                                        {selectedCourse && selectedCourse.id === crs.id && selectedCourse.course_exercises.length === 0 &&
                                            <>
                                                <hr style={{margin: '20px 0px'}}/>
                                                <p className="lead text-start" style={{margin: '0px', padding: '0px'}}>
                                                    Eh, belum ada soal nih. Sabar ya, nanti pasti ada kok. :)
                                                </p>
                                            </>
                                        }
                                    </Col>
                                </Col>
                            ))}
                        </Col>
                        <Col md={6} className={`course-container ${!selectedCourse ? "align-content-center" : ""}`}
                             style={{minHeight: '80vh'}}>
                            {!selectedCourse &&
                                <h4 className="fw-bold text-center align-content-center"
                                    style={{color: 'darkgray', height: '100%'}}>
                                    Select a course to view details
                                </h4>
                            }
                            {selectedCourse &&
                                <Col className="align-content-start">
                                    <h4 className="fs-3 fw-bold text-start" style={{color: 'darkgray'}}>
                                        Course Details
                                    </h4>
                                    <hr style={{margin: '15px 0px'}}/>
                                    <h4 className="fs-3 fw-bold text-start" style={{marginBottom: '20px'}}>
                                        {selectedCourse.name}
                                    </h4>
                                    <Stack direction="horizontal" className="text-start">
                                        <p style={{color: 'darkgray'}}><b>Difficulty:&nbsp;</b></p><p>{selectedCourse.level}</p>
                                    </Stack>
                                    <Stack direction="horizontal" className="text-start">
                                        <p style={{color: 'darkgray'}}><b>Total point:&nbsp;</b></p><p>{selectedCourse.total_points}</p>
                                    </Stack>
                                    <Stack direction="vertical" className="text-start">
                                        <p style={{color: 'darkgray'}}><b>Description:&nbsp;</b></p><p>{selectedCourse.description}</p>
                                    </Stack>
                                    <Stack direction="vertical" className="text-start">
                                        <p style={{color: 'darkgray'}}><b>Learning objectives:&nbsp;</b></p>
                                        <ul>
                                            {selectedCourse.learning_objectives.map((objective, index) => (
                                                <li key={index}>
                                                    {objective}
                                                </li>
                                            ))}
                                        </ul>
                                    </Stack>
                                </Col>
                            }
                        </Col>
                    </Stack>
                }
            </Container>
            <Footer />
        </div>
    );
}

export default Courses;