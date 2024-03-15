import Head from "../../Components/Head/Head";
import "./PropertyDetails.css";
import info_icon1 from "../../assets/images/info-icon-01.png";
import single_villa from "../../assets/images/single-property.jpg";
import deal01 from "../../assets/images/deal-01.jpg";
import { Link } from "react-router-dom";
import SchedualVisitBtn from "../../Components/SchedualVisitBtn/SchedualVisitBtn";
import Footer from "../../Components/Footer/Footer";
const PropertyDetails = () => {
  return (
    <div className="PropertyDetails">
      <Head links="Single Property" headLine="Single Property" />
      <div className="container">
        <div className="villa-1 d-flex mt-5">
          <div className="villa-img-box">
            <img src={single_villa} alt="" className="villa-1-img" />
            <h4>Appartment</h4>
          </div>
          <div className="info-box">
            <div className="info-1">
              <img src={info_icon1} alt="" />
              <div className="info-text">
                <h4>250 m2</h4>
                <p>total Flat Space</p>
              </div>
            </div>
            <div className="info-1">
              <img src={info_icon1} alt="" />
              <div className="info-text">
                <h4>Contract</h4>
                <p>Contract Ready</p>
              </div>
            </div>
            <div className="info-1">
              <img src={info_icon1} alt="" />
              <div className="info-text">
                <h4>Payment</h4>
                <p>payment</p>
              </div>
            </div>
            <div className="info-last">
              <img src={info_icon1} alt="" />
              <div className="info-text">
                <h4>250 m2</h4>
                <p>total Flat Space</p>
              </div>
            </div>
          </div>
        </div>
        <h3 className="Street-Miami-head"> 24 New Street Miami, OR 24560</h3>
        <p className="Street-Miami-text">
          Get the best villa agency HTML CSS Bootstrap Template for your company
          website. TemplateMo provides you the{" "}
          <Link to="https://www.google.com/search?q=best+free+css+templates">
            best free CSS templates
          </Link>{" "}
          in the world. Please tell your friends about it. Thank you. Cloud
          bread kogi bitters pitchfork shoreditch tumblr yr succulents
          single-origin coffee schlitz enamel pin you probably haven't heard of
          them ugh hella.
          <br />
          <br />
          When you look for free CSS templates, you can simply type TemplateMo
          in any search engine website. In addition, you can type TemplateMo
          Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
          +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
          PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </p>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header ">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Best useful links ?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Get <strong>the best villa</strong> website template in HTML CSS
                and Bootstrap for your business. TemplateMo provides you the{" "}
                <Link to="//www.google.com/search?q=best+free+css+templates">
                  best free CSS templates
                </Link>{" "}
                in the world. Please tell your friends about it.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How does it works ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Dolor <strong>almesit amet</strong>, consectetur adipiscing
                elit, sed doesn't eiusmod tempor incididunt ut labore
                consectetur <code>adipiscing</code> elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Why is Villa Agency is the best ?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Dolor <strong>almesit amet</strong>, consectetur adipiscing
                elit, sed doesn't eiusmod tempor incididunt ut labore
                consectetur <code>adipiscing</code> elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="villa-2">
        <div className="section-5">
        <div className="sec-5-banner">
          <div className="sec-5-heading">
            <h6>| Best Deal</h6>
            <h2>
              Find Your Best <br />
              Deal Right Now !
            </h2>
          </div>
          <div className="sec-5-options">
            <Link to="#">Appartment</Link>
            <Link to="#">Villa House</Link>
            <Link to="#">Penthouse</Link>
          </div>
        </div>
        <div className="sec-5-content mt-5">
          <div className="info-table">
            <ul>
              <li>
                Total Flat Space <span>185 m2</span>
              </li>
              <li>
                Floor number <span>26th</span>
              </li>
              <li>
                number of rooms <span>4</span>
              </li>
              <li>
                Payment Process<span>Bank</span>
              </li>
            </ul>
          </div>
          <div className="deal-img">
            <img src={deal01} alt="" />
          </div>
          <div className="property-info mb-4">
            <h4>Extra Info About Property</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
              eiusmod tempor pack incididunt ut labore et dolore magna aliqua
              quised ipsum suspendisse.
              <br /> <br />
              When you need free CSS templates, you can simply type TemplateMo
              in any search engine website. In addition, you can type TemplateMo
              Portfolio, TemplateMo One Page Layouts, etc.
            </p>
            <SchedualVisitBtn />
          </div>
        </div>
      </div>
        </div>
      <Footer/>
    </div>
  );
};

export default PropertyDetails;
