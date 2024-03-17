import "./Header.css";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMap,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="top-banner justify-between d-flex">
          <ul className="info d-flex">
            <li>
              <FaEnvelope />
              info@company.com
            </li>
            <li>
              <FaMap />
              Sunny Isles Beach, FL 33160
            </li>
          </ul>
          <ul className="social-links d-flex">
            <li>
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
