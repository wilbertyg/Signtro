import Logo from "./assets/logo.svg"; 

function Navbar() {
    return (
        <nav className="navbar">
        <div className="nav-logo">
        <img src={Logo} alt="Signtro" className="logo" />
        </div>
        <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#courses">Courses</a>
            <a href="#dictionary">Dictionary</a>
        </div>
    </nav>
    );
}

export default Navbar;