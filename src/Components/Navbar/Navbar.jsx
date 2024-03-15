import { Link } from 'react-router-dom';
import './Navbar.css'
import { FaEnvelope, FaMap,FaFacebook,FaLinkedin,FaTwitter,FaInstagram,FaCalendar } from "react-icons/fa6";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="top-banner">
                <div className="left-banner">
                    <div className="info">
                        <FaEnvelope/>
                        <p>info@company.com</p>
                    </div>
                    <div className="min-line"></div>
                    <div className="weather">
                        <FaMap/>
                        <p>Sunny isles Beach, FL 33160</p>
                    </div>
                </div>
                <div className="right-banner">
                    <div className="social">
                        <div className="facebook">
                            <FaFacebook/>
                        </div>
                        <div className="twitter">
                            <FaTwitter/>
                        </div>
                        <div className="linkedin">
                            <FaLinkedin/>
                        </div>
                        <div className="instagram">
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="nav-logo">
                    <h1>Villa</h1>
                </div>
                <ul className="menu menu-list">
                    <li><Link to='/' className='home-active'>Home</Link></li>
                    <li><Link to='/Properties'>Properties</Link></li>
                    <li><Link to='propertyDetails'>Property Details</Link></li>
                    <li><Link to='contact'>Contact Us</Link></li>
                    <li>
                        <div className="schedual-visit">
                        
                            <button>
                                <FaCalendar/>
                            </button>
                            <div className="text-schedular">
                                <p>Schedualr Visit</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="menu-bar">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar