import { Link } from "react-router-dom";
import "./Nav.css";
import { FaEnvelope, FaMap,FaFacebook,FaLinkedin,FaTwitter,FaInstagram,FaCalendar } from "react-icons/fa6";
const Nav = () => {
    return (
        <div className="nav">
            <div className="container">
            <div className="top-banner">
                <ul className="info">
                    <li>
                        <FaEnvelope/>
                        info@company.com
                    </li>
                    <li>
                        <FaMap/>
                        Sunny Isles Beach, FL 33160
                    </li>
                </ul>
                <ul className="social-links">
                    <li>
                        <Link to='#'>
                            <FaFacebook/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FaTwitter/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FaLinkedin/>
                        </Link>
                    </li>
                    <li>
                        <Link to='#'>
                            <FaInstagram/>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
            <Link to="/" className="navbar-brand" href="#">
                Villa
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to='/' className="nav-link active" aria-current="page" href="#">
                    Home
                    </Link>
                </li>
                <li className="nav-item ms-5">
                    <Link to='/properties' className="nav-link" href="#">
                    Properties
                    </Link>
                </li>
                <li className="nav-item ms-5">
                    <Link to='/propertyDetails' className="nav-link" href="#">
                    Property Details
                    </Link>
                </li>
                <li className="nav-item ms-5">
                    <Link to='/contact' className="nav-link" href="#">
                    Contact Us
                    </Link>
                </li>
                <li className="nav-item ms-5">
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
            </div>
            </div>
        </nav>
        </div>
    );
};

export default Nav;
