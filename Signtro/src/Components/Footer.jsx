import React from 'react'
import {Col, Container, Image, Nav, Navbar, Row, Stack} from "react-bootstrap";

import Signtro from "../assets/Signtro.svg";
import Instagram from "../assets/Instagram.svg";
import X_Twitter from "../assets/X-Twitter.svg";
import YouTube from "../assets/YouTube.svg";

function Footer() {
    return (
        <Navbar fixed="bottom" bg="light" data-bs-theme="light" className="shadow-lg">
            <Container fluid className="flex-column" style={{ marginLeft: '10px', marginRight: '10px', marginBottom: '20px'}}>
                <Row style={{ width: '100%' }}>
                    <Col>
                        <Nav>
                            <Image src={Signtro} alt="Signtro" width={216} height={144} to/>
                        </Nav>
                    </Col>
                    <Col md="auto" className="align-content-center">
                        <Nav style={{ gap: '120px' }}>
                            <Nav.Link href="/" className="fw-bold">Home</Nav.Link>
                            <Nav.Link href="/courses" className="fw-bold">Courses</Nav.Link>
                            <Nav.Link href="/dictionary" className="fw-bold">Dictionary</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="align-content-center">
                        <Nav className="justify-content-end" style={{ gap: '15px' }}>
                            <Nav.Link href="https://instagram.com/signtroduction" style={{ width: '38px' }}>
                                <Image src={Instagram} alt="Instagram" width={30} height={30}/>
                            </Nav.Link>
                            <Nav.Link href="https://x.com/signtroduction" style={{ width: '38px' }}>
                                <Image src={X_Twitter} alt="X" width={30} height={30}/>
                            </Nav.Link>
                            <Nav.Link href="https://youtube.com/@Signtro" style={{ width: '38px' }}>
                                <Image src={YouTube} alt="YouTube" width={30} height={30} />
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                <Row style={{ width: '100%' }}>
                    <Col>
                        <p>© 2024 Signtro, Inc. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Footer;