import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {Outlet} from "react-router-dom";

import Signtro from "../assets/Signtro.svg";

function NavigationBar() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className="shadow-sm">
                <Container fluid>
                    <Navbar.Brand href="/" style={{ width: '36px' }}>
                        <Image src={Signtro} alt="Signtro" width={108} height={36} />
                    </Navbar.Brand>
                    <Nav className="justify-content-center" style={{ gap: '60px'}}>
                        <Nav.Link href="/" className="fw-bold">Home</Nav.Link>
                        <Nav.Link href="/courses" className="fw-bold">Courses</Nav.Link>
                        <Nav.Link href="/dictionary" className="fw-bold">Dictionary</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">
                            <Image src={"https://placehold.co/36x36?text=?"} alt="Profile" roundedCircle />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default NavigationBar;