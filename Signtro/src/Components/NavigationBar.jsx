import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {useLocation, Outlet} from "react-router-dom";

import Signtro from "../assets/Signtro.svg";

function NavigationBar() {
    const location = useLocation();

    return (
        <>
            <Navbar bg="light" data-bs-theme="light" className="shadow-sm">
                <Container fluid>
                    <Navbar.Brand href="/" style={{ width: '36px' }}>
                        <Image src={Signtro} alt="Signtro" width={108} height={36} />
                    </Navbar.Brand>
                    <Nav variant="underline" className="justify-content-center" style={{ gap: '60px'}}>
                        <Nav.Link href="/" className={`fw-bold ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
                        <Nav.Link href="/courses" className={`fw-bold ${location.pathname === '/courses' ? 'active' : ''}`}>Courses</Nav.Link>
                        <Nav.Link href="/dictionary" className={`fw-bold ${location.pathname === '/dictionary' ? 'active' : ''}`}>Dictionary</Nav.Link>
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