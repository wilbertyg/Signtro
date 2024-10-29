import Footer from "../Components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import Background from "../assets/backgrounds/Background - Sign Language Abstract.svg";
import Illustration from "../assets/backgrounds/Interaction.svg";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Container fluid className="flex-row">
                <Stack direction="vertical" gap={3} className="align-items-center justify-content-center">
                    <Row className="position-relative justify-content-center">
                        <div style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: '100vh',
                            position: 'absolute',
                            opacity: 0.5,
                            width: '100%',
                            height: '100vh'
                        }}/>
                        <Stack direction="horizontal" className="align-items-center justify-content-center"
                               style={{gap: '100px'}}>
                            <Col md={6} style={{zIndex:'1'}}>
                                <h3 className="display-3 fw-bold text-start" style={{color: 'limegreen'}}>
                                    Welcome to Signtro.
                                </h3>
                                <p className="lead fw-bold text-start text-wrap">
                                    An interactive learning environment for Sign Language, integrated with AI.
                                    For the deaf, hearing impaired, and those who want to learn.
                                </p>
                                <hr className="my-4"/>
                                <Button className="btn-primary" size="lg" onClick={() => navigate('/courses')}>
                                    Get started!
                                </Button>
                            </Col>
                            <Col md="auto" className="d-flex justify-content-center">
                                <Image src={Illustration} alt="Illustration" width={450} height={450}/>
                            </Col>
                        </Stack>
                    </Row>
                </Stack>
                <div className="rounded-pill align-items-center" style={{margin:'100px 75px', height: '10px', backgroundColor: 'limegreen'}} />
                <Stack direction="vertical" gap={3} className="align-items-center justify-content-center">
                    <Col>
                        <h1 className="display-3 fw-bold text-center">Sign Language</h1>
                        <p className="lead fw-bold text-center">
                            Sign language is a communication system that uses hand gestures, facial expressions, and body language to convey messages. This language is used by the deaf community and people with hearing impairments as their primary communication tool. Each country or region has a unique sign language variation, such as American Sign Language (ASL) in the United States or Indonesian Sign Language (BISINDO). Sign language is not just about mimicking spoken words, but has its own grammar and sentence structure. In addition, sign language also provides important opportunities for social inclusion and education for the deaf community, helping them to interact more easily in the wider community.
                        </p>
                    </Col>
                </Stack>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;