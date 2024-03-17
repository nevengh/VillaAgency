import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
      setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
        <div className="container">
                <div className="nav-logo">Villa</div>
                <ul className={isOpen ? " active" : "nav-links"}>
                    <li><Link to='/VillaAgency'>Home</Link></li>
                    <li><Link to='Properties' >Properties</Link></li>
                    <li><Link to='propertyDetails' >Property Details</Link></li>
                    <li><Link to='contact' >Contact Us</Link></li>
                    <li className='visit-item ms-5'>
                    <div className="schedual-visit d-flex align-center justify-center">
                      <button>
                        <FaCalendar />
                      </button>
                      <div className="text-schedular d-flex justify-center align-center">
                        <p>Schedualr Visit</p>
                      </div>
                    </div>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleNavbar}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
        </div>
    </nav>
  )
}

export default Navbar