import Footer from "../../Components/Footer.jsx";
import {Button, Card, Col, Container, FloatingLabel, Form, Image, Row, Stack} from "react-bootstrap";
import Background from "../../assets/backgrounds/Background - Sign Language Abstract.svg";
import {useState} from "react";
import './Profile.css'

function Profile() {
    const [originalFormData, setOriginalFormData] = useState({
        username: "John Doe",
        email: "john.doe@gmail.com",
        password: "john.doe",
        language: "Bisindo",
    });

    const [formData, setFormData] = useState({
        username: originalFormData.username,
        email: originalFormData.email,
        password: originalFormData.password,
        language: originalFormData.language
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleLanguageChange = (lang) => {
        setFormData({...formData, language: lang});
    }

    const handleCancel = () => {
        console.log("[INFO] Changes discarded: ", formData);
        alert("Changes discarded.");

        setFormData({...originalFormData});
    }

    const handleSave = () => {
        console.log("[SUCCESS] Saved data: ", formData);
        alert("Data saved successfully!\r\n\n" +
            "Username: " + formData.username + "\r\n" +
            "Email: " + formData.email + "\r\n" +
            "Password: " + formData.password + "\r\n" +
            "Language: " + formData.language);

        setOriginalFormData({...originalFormData, ...formData});
    }

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
                    <h3 className="fw-bold text-center text-wrap" style={{color: 'limegreen'}}>
                        Profile Settings
                    </h3>
                    <p className="lead fw-semibold text-center text-wrap">
                        Kalau ada perubahan data, silakan ubah informasi profil Anda di sini.
                    </p>
                </Row>

                <div className="profile-settings">
                    <Form>
                        <FloatingLabel
                            controlId="FL_Username"
                            label="Username"
                            className="mb-3">
                            <Form.Control type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange}/>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="FL_Email"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleInputChange}/>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="FL_Password"
                            label="Password"
                            className="mb-3">
                            <Form.Control type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange}/>
                        </FloatingLabel>

                        <Form.Group className="mb-3" controlId="FL_Language">
                            <Form.Label className="fw-bold">Preferred Sign Language</Form.Label>
                            <Stack direction="horizontal" className="mb-3 gap-3">
                                {languages.map((lang, index) => (
                                    <div key={index}
                                         className={`lang-item ${formData.language === lang.name ? "active" : ""}`}
                                         onClick={() => handleLanguageChange(lang.name)}>
                                        <Image src={"asset-bulks/sign-language-logos/" + lang.imgSrc} alt={lang.name}/>
                                        <p className="fw-bold">{lang.name}</p>
                                    </div>
                                ))}
                            </Stack>
                        </Form.Group>
                    </Form>

                    <Col style={{marginTop: '25px'}}>
                        <Button className="btn-danger" onClick={handleCancel} style={{marginRight: '10px'}}>
                            Cancel
                        </Button>
                        <Button className="btn-primary" onClick={handleSave}>
                            Save
                        </Button>
                    </Col>
                </div>
            </Container>
            <Footer/>
        </div>
    );
}

const languages = [
    {
        name: "Bisindo",
        imgSrc: "Logo-BISINDO.png"
    },
    {
        name: "Sibi",
        imgSrc: "Logo-SIBI.png"
    }
]

export default Profile;