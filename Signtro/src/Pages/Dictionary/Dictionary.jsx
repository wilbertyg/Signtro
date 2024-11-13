import Footer from "../../Components/Footer.jsx";
import {Container, Image, Row} from "react-bootstrap";
import './Dictionary.css';
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import {useEffect} from "react";

function Dictionary() {
    useEffect(() => {
        document.title = 'Dictionary | Signtro';
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
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
                <Row>
                    <h1 className="fw-bold text-center text-wrap" style={{color: 'limegreen'}}>
                        26 Huruf. 26 Isyarat Tangan.
                    </h1>
                    <p className="lead fw-semibold text-center text-wrap">
                        Sebagai dasar dari Bahasa Isyarat, setiap huruf memiliki isyarat tangan yang unik.
                    </p>
                </Row>
                <div className="dictionary-grid">
                    {signs.map((sign, index) => (
                        <div key={index} className="dictionary-item">
                            <Image src={"asset-bulks/hand-signs/" + sign.imgSrc} alt={`Sign for ${sign.letter}`}/>
                            <h2 className="fw-bold">{sign.letter}</h2>
                        </div>
                    ))}
                </div>
            </Container>
            <Footer/>
        </div>
    );
}

const signs = [
    {
        letter: 'A',
        imgSrc: 'HS-A.png'
    },
    {
        letter: 'B',
        imgSrc: 'HS-B.png'
    },
    {
        letter: 'C',
        imgSrc: 'HS-C.png'
    },
    {
        letter: 'D',
        imgSrc: 'HS-D.png'
    },
    {
        letter: 'E',
        imgSrc: 'HS-E.png'
    },
    {
        letter: 'F',
        imgSrc: 'HS-F.png'
    },
    {
        letter: 'G',
        imgSrc: 'HS-G.png'
    },
    {
        letter: 'H',
        imgSrc: 'HS-H.png'
    },
    {
        letter: 'I',
        imgSrc: 'HS-I.png'
    },
    {
        letter: 'J',
        imgSrc: 'HS-J.png'
    },
    {
        letter: 'K',
        imgSrc: 'HS-K.png'
    },
    {
        letter: 'L',
        imgSrc: 'HS-L.png'
    },
    {
        letter: 'M',
        imgSrc: 'HS-M.png'
    },
    {
        letter: 'N',
        imgSrc: 'HS-N.png'
    },
    {
        letter: 'O',
        imgSrc: 'HS-O.png'
    },
    {
        letter: 'P',
        imgSrc: 'HS-P.png'
    },
    {
        letter: 'Q',
        imgSrc: 'HS-Q.png'
    },
    {
        letter: 'R',
        imgSrc: 'HS-R.png'
    },
    {
        letter: 'S',
        imgSrc: 'HS-S.png'
    },
    {
        letter: 'T',
        imgSrc: 'HS-T.png'
    },
    {
        letter: 'U',
        imgSrc: 'HS-U.png'
    },
    {
        letter: 'V',
        imgSrc: 'HS-V.png'
    },
    {
        letter: 'W',
        imgSrc: 'HS-W.png'
    },
    {
        letter: 'X',
        imgSrc: 'HS-X.png'
    },
    {
        letter: 'Y',
        imgSrc: 'HS-Y.png'
    },
    {
        letter: 'Z',
        imgSrc: 'HS-Z.png'
    }
];

export default Dictionary;