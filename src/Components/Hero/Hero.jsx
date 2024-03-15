/* eslint-disable react/no-unescaped-entities */
import Slider from "../Slider/Slider";
import "./Hero.css";
import house_icon from "../../assets/images/featured-icon.png";
import { Link } from "react-router-dom";
import info_icon1 from "../../assets/images/info-icon-01.png";
import { FaPlay } from "react-icons/fa6";
import CardSection4 from "../CardSection4/CardSection4";
import deal01 from "../../assets/images/deal-01.jpg";
import SchedualVisitBtn from "../SchedualVisitBtn/SchedualVisitBtn";
import VillasCard from "../VillasCard/VillasCard";
import property01 from '../../assets/images/property-01.jpg'
import property02 from '../../assets/images/property-02.jpg'
import property03 from '../../assets/images/property-03.jpg'
import property04 from '../../assets/images/property-04.jpg'
import property05 from '../../assets/images/property-05.jpg'
import property06 from '../../assets/images/property-06.jpg'
import phone from '../../assets/images/phone-icon.png'
import email from '../../assets/images/email-icon.png'

const Hero = () => {
  const cardInfo = [
    {
      id: 1,
      title: "34",
      text1: "Buildings",
      text2: "Finished Now",
    },
    {
      id: 1,
      title: "12",
      text1: "Years",
      text2: "Experience",
    },
    {
      id: 1,
      title: "24",
      text1: "Awwards",
      text2: "Won 2023",
    },
  ];
  const Villascard =[
    {
        id:1,
        image:property01,
        brand :'Luxary Villa',
        price:'$2.264.000',
        bed:'Bathrooms :',
        numberbed:'8',
        area:'Area :',
        areaspace:'545 m2',
        FLoor:'Floors :',
        floornumb:'3',
        parking:'Parking :',
        parkingnum:'6 spots',

    },
    {
        id:2,
        image:property02,
        brand :'Luxary Villa',
        price:'$2.264.000',
        bed:'Bathrooms :',
        numberbed:'8',
        area:'Area :',
        areaspace:'545 m2',
        FLoor:'Floors :',
        floornumb:'3',
        parking:'Parking :',
        parkingnum:'6 spots',

    },
    {
        id:3,
        image:property03,
        brand :'Luxary Villa',
        price:'$2.264.000',
        bed:'Bathrooms :',
        numberbed:'8',
        area:'Area :',
        areaspace:'545 m2',
        FLoor:'Floors :',
        floornumb:'3',
        parking:'Parking :',
        parkingnum:'6 spots',

    },
    {
        id:4,
        image:property04,
        brand :'Luxary Villa',
        price:'$2.264.000',
        bed:'Bathrooms :',
        numberbed:'8',
        area:'Area :',
        areaspace:'545 m2',
        FLoor:'Floors :',
        floornumb:'3',
        parking:'Parking :',
        parkingnum:'6 spots',

    },
    {
        id:5,
        image:property05,
        brand :'Luxary Villa',
        price:'$2.264.000',
        bed:'Bathrooms :',
        numberbed:'8',
        area:'Area :',
        areaspace:'545 m2',
        FLoor:'Floors :',
        floornumb:'3',
        parking:'Parking :',
        parkingnum:'6 spots',

    },
    {
        id:6,
        image:property06,
        brand :'Luxary Villa',
        price:'$2.264.000',
        bed:'Bathrooms :',
        numberbed:'8',
        area:'Area :',
        areaspace:'545 m2',
        FLoor:'Floors :',
        floornumb:'3',
        parking:'Parking :',
        parkingnum:'6 spots',

    },

  ]
  const villamap= Villascard.map((e)=>{
    return <VillasCard  key={e.id} image={e.image} brand={e.brand} price={e.price} bed={e.bed} numberbed={e.numberbed} area={e.area} areaspace={e.areaspace} FLoor={e.FLoor} floornumb={e.floornumb} parking={e.parking} parkingnum={e.parkingnum}  />
  })
  const cards = cardInfo.map((ele) => {
    return (
      <CardSection4
        key={ele.id}
        title={ele.title}
        text1={ele.text1}
        text2={ele.text2}
      />
    );
  });
  return (
    <div className="hero">
      <Slider />
      <div className="section-2 ">
        <div className="container">
          <div className="sec-2-box">
            <div className="sec-2-img">
              {/* <img src={house_sec_2} alt="" /> */}
              <div className="circle-img">
                <button>
                  <Link to="/propertyDetails">
                    <img src={house_icon} alt="" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="sec-2-accordion">
              <h4>|FEATURED</h4>
              <h1>
                Best <br />
                Appartment&
                <br />
                Sea View
              </h1>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
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
                      Get <strong>the best villa</strong> website template in
                      HTML CSS and Bootstrap for your business. TemplateMo
                      provides you the{" "}
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
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit, sed doesn't eiusmod tempor incididunt ut
                      labore consectetur <code>adipiscing</code> elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
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
                      Dolor <strong>almesit amet</strong>, consectetur
                      adipiscing elit, sed doesn't eiusmod tempor incididunt ut
                      labore consectetur <code>adipiscing</code> elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </div>
      <div className="section-3">
        <div className="video">
          <div className="section-heading text-center">
            <h6>| Video View</h6>
            <h2>
              Get Closer View
              <br /> & Different <br /> Feeling
            </h2>
            <div className="video-frame">
              <div className="button-video">
                <Link to="https://youtube.com">
                  <FaPlay />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4">{cards}</div>
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
      <div className="section-6">
        <div className="sec-5-heading text-center">
          <h6>| Properties</h6>
          <h2>
          We Provide <br/>
          The Best Property <br/>
          You Like
          </h2>
        </div>
        <div className="sec-6-box">
            {villamap}
        </div>
      </div>
      <div className="section-7">
        <div className="sec-5-heading text-center">
            <h6>| Contact Us</h6>
            <h2 className="text-white">
            Get In Touch <br/>
            With Our Agents
            </h2>
        </div>
        <div className="map-form-box ">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.053888613253!2d-80.14561672350703!3d25.939107693390294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1710175563202!5m2!1sen!2s" 
                width="600" 
                height="450"  
                allowfullScreen="" 
                loading="lazy" 
                title="Responsive Map"
                
                referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="map-contact d-flex ">
                    <div className="phone d-flex ">
                        <img src={phone} alt=""/>
                        <h6  className="ms-5">
                            010-020-0340 <br/>
                            <span className="mt-1">Phone Number</span>
                        </h6>
                    </div>
                    <div className="phone d-flex ms-3">
                        <img src={email} alt=""/>
                        <h6  className="ms-5">
                            info@villa.co<br/>
                            <span className="mt-1">Business Email</span>
                        </h6>
                    </div>
                </div>
            </div>
            <div className="form">
                <form action="">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="Your Name...." />

                    <label htmlFor="">Email Address</label>
                    <input type="email" name="" id="" placeholder="Your E-mail..." />

                    <label htmlFor="">Subject</label>
                    <input type="text" name="" id="" placeholder="Subject..." />

                    <label htmlFor="">Message</label>
                    <textarea type="text" placeholder="Your Message" />
                    <button>Send Message</button>
                </form>
            </div>
            
        </div>
      </div>
    </div>
    
  );
};

export default Hero;
