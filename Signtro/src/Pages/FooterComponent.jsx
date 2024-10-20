import React from 'react'
import './FooterComponent.css'
import Logo from '../assets/logo.svg'
import FacebookIcon from '../assets/facebook.svg'
import InstagramIcon from '../assets/instagram.svg'
import TwitterIcon from '../assets/twitter.svg'
import YouTubeIcon from '../assets/youtube.svg'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src={Logo} alt="Signtro Logo" className="logo-icon" />
                </div>

                <div className="footer-section pages-section">
                    <h3 className="section-title">Pages</h3>
                    <div className="page-list">
                        <Link to="/">Home</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/dictionary">Dictionary</Link>
                    </div>
                </div>

                <div className="footer-section media-section">
                    <h3 className="section-title">Media</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/"><img src={FacebookIcon} alt="Facebook" className="social-icon" /></a>
                        <a href="https://www.instagram.com/signtroduction/"><img src={InstagramIcon} alt="Instagram" className="social-icon" /></a>
                        <a href="https://x.com/signtroduction"><img src={TwitterIcon} alt="Twitter" className="social-icon" /></a>
                        <a href="https://www.youtube.com/@Signtro"><img src={YouTubeIcon} alt="YouTube" className="social-icon" /></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 Signtro, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer