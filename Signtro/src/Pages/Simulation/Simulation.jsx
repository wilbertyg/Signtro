import {useEffect} from "react";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import {Container, Row} from "react-bootstrap";
import SimulatorWebcam from "../../Components/Simulator/SimulatorWebcam.jsx";

function Simulation() {
    useEffect(() => {
        document.title = 'Simulation | Signtro';
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '90vh'}}>
            <Container fluid className="flex-grow-1 flex-column justify-content-center"
                       style={{margin: '25px 0px'}}>
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
                <Row className="justify-content-center" style={{padding: '0'}}>
                    <h1 className="fw-bold text-center text-wrap" style={{color: 'limegreen'}}>
                        Bayangkan. Praktikkan. Kuasai.
                    </h1>
                    <p className="lead fw-semibold text-center text-wrap" style={{marginBottom: '40px'}}>
                        Bayangkan tangan kamu adalah kanvas, dan isyarat tangan adalah lukisan.
                    </p>
                    {
                        new SimulatorWebcam('', '')
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Simulation;