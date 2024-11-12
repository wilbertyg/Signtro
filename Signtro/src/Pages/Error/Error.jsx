import Footer from "../../Components/Footer.jsx";
import {Container} from "react-bootstrap";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";

function Error() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Container fluid className="flex-grow-1 d-flex flex-column justify-content-center"
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
                <h1 className="fw-bold text-center text-wrap" style={{color: 'limegreen'}}>
                    404: Halaman tidak ditemukan.
                </h1>
                <p className="lead fw-semibold text-center text-wrap">
                    Maaf, halaman yang Anda cari tidak ditemukan. Coba periksa kembali URL yang Anda masukkan.
                </p>
            </Container>
            <Footer/>
        </div>
    );
}

export default Error;