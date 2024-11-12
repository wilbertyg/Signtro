import Footer from "../../Components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Image, Row, Stack} from "react-bootstrap";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import Illustration from "../../assets/backgrounds/Interaction.svg";
import Sign_Language from "../../assets/stock-images/Sign-Language.png";
import Computer_Vision_Palm from "../../assets/stock-images/Computer-Vision-Palm.png";

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
                        <div style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: '100vh',
                            position: 'absolute',
                            opacity: 0.5,
                            width: '100%',
                            height: '100vh',
                            marginTop: '100vh'
                        }}/>
                        <Stack direction="horizontal" className="align-items-center justify-content-center"
                               style={{gap: '100px'}}>
                            <Col md={6} style={{zIndex: '1'}}>
                                <h3 className="display-3 fw-bold text-start" style={{color: 'limegreen'}}>
                                    Selamat datang di Signtro!
                                </h3>
                                <p className="lead fw-bold text-start text-wrap">
                                    Tempat belajar interaktif untuk Bahasa Isyarat, dibantu dengan AI.
                                    Khusus tunarungu, difabel pendengaran, dan juga kalian yang ingin belajar.
                                </p>
                                <hr className="my-4"/>
                                <Button className="btn-primary" size="lg" onClick={() => navigate('/courses')}>
                                    ✨ Yuk masuk!
                                </Button>
                            </Col>
                            <Col md="auto" className="d-flex justify-content-center">
                                <Image src={Illustration} alt="Illustration" width={450} height={450}/>
                            </Col>
                        </Stack>
                    </Row>
                </Stack>
                <div className="rounded-pill align-items-center"
                     style={{margin: '100px 75px', height: '10px', backgroundColor: 'limegreen'}}/>
                <Stack direction="vertical" className="align-items-center justify-content-center" style={{gap: '75px'}}>
                    <Row className="justify-content-center align-items-center" style={{gap: '40px', zIndex: '1'}}>
                        <Col md='8'>
                            <h6 className="display-6 fw-bold fst-italic text-start" style={{color: 'gray'}}>- Sign Language -</h6>
                            <p className="lead text-start">
                                Bahasa isyarat itu cara komunikasi pakai gerakan tangan, ekspresi wajah, dan bahasa tubuh.
                                Biasanya dipakai sama komunitas tunarungu atau yang punya gangguan pendengaran.
                                Tiap negara punya bahasa isyarat unik, kayak ASL di Amerika atau BISINDO di Indonesia.
                                Bahasa ini bukan sekadar tiru kata-kata lisan, tapi punya aturan dan struktur sendiri.
                                Bahasa isyarat juga penting buat inklusi sosial dan pendidikan, biar komunitas tunarungu
                                bisa lebih mudah berinteraksi di masyarakat.
                            </p>
                        </Col>
                        <Col md='auto'>
                            <Image src={Sign_Language} alt="Sign Language" width={256} height={256}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center" style={{gap: '40px', zIndex: 1}}>
                        <Col md="auto">
                            <Image src={Computer_Vision_Palm} alt="Computer Vision Palm" width={256} height={256}/>
                        </Col>
                        <Col md={8}>
                            <h6 className="display-6 fw-bold fst-italic text-end" style={{color: 'gray'}}>- Computer Vision -</h6>
                            <p className="lead text-end">
                                Computer vision itu cabang AI yang bikin komputer bisa "melihat" dan paham gambar atau video,
                                mirip kayak manusia.
                                Tujuan utamanya di sini adalah buat mengenali bahasa isyarat yang dipakai pengguna.
                            </p>
                        </Col>
                    </Row>
                </Stack>
                <Stack direction="vertical" className="align-items-center justify-content-center" style={{margin: '100px 25px'}}>
                    <Button className="justify-content-center align-items-center btn-primary" style={{zIndex: '1'}} size="lg" onClick={() => navigate('/courses')}>
                        🚀 Tunggu apa lagi? Yuk coba sekarang!
                    </Button>
                </Stack>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;