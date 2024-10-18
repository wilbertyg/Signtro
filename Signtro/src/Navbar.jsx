import { Link } from 'react-router-dom';
import Logo from "./assets/logo.svg";

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    {/* <img src={Logo} alt="Signtro" className="logo" /> */}
                </Link>
            </div>
            <div className="nav-links">
                {/* <Link to="/">Home</Link>
                <Link to="/">Courses</Link>
                <Link to="/">Dictionary</Link> */}
            </div>
            <div>
                {/* <Link to="/profile" className="nav-profile">
                    <img src={Profile} alt="Profile" className="profile" />
                </Link> */}
            </div>
        </nav>
    );
}

export default Navbar;