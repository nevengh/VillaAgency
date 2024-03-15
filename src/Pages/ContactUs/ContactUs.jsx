import Head from '../../Components/Head/Head'
import './ContactUs.css'
import phone from '../../assets/images/phone-icon.png'
import email from '../../assets/images/email-icon.png'
import Footer from '../../Components/Footer/Footer'
const ContactUs = () => {
  return (
    <div className='ContactUs'>
        <Head links='CONTACT US' headLine='CONTACT US' />
        <div className="container">
            <div className="contact-us-box mt-5">
                <div className="contact-box-1">
                    <div className="sec-5-heading mb-5">
                        <h6>| Conatct Us</h6>
                        <h2>
                        Get In Touch  <br/>
                        With Our Agents
                        </h2>
                    </div>
                    <p className="contact-text">
                    When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. 
                    There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.
                    </p>
                    <div className="map-contact  ">
                    <div className="phone d-flex mb-5 phone-contact ">
                        <img src={phone} alt=""/>
                        <h6  className="ms-5">
                            010-020-0340 <br/>
                            <span className="mt-1">Phone Number</span>
                        </h6>
                    </div>
                    <div className="phone d-flex ms-3 phone-contact ">
                        <img src={email} alt=""/>
                        <h6  className="ms-5">
                            info@villa.co<br/>
                            <span className="mt-1">Business Email</span>
                        </h6>
                    </div>
                </div>
                </div>
                <div className="contact-box-2">
                <div className="form form-contact">
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
            <iframe className='mt-5  text-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28703.053888613253!2d-80.14561672350703!3d25.939107693390294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1710175563202!5m2!1sen!2s" 
                width="600" 
                height="450"  
                allowfullScreen="" 
                loading="lazy" 
                title="Responsive Map"
                
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs