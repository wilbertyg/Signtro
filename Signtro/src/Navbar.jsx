import { Link } from 'react-router-dom';

import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    {/* <img src={$} alt="Signtro" className="logo" /> */}
                    asd
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/dictionary">Dictionary</Link>
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