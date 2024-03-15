import './Slider.css'
import banner_1 from './../../assets/images/banner-01.jpg'
import banner_2 from './../../assets/images/banner-02.jpg'
import banner_3 from './../../assets/images/banner-03.jpg'
import SliderContent from '../SliderContent/SliderContent'
const Slider = () => {
  return (
    <div className="slider">
                    <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner_1}  alt="..."/>
                        <SliderContent title='Toronto,' span='Canada' text='HURRY!' text1='GET THE BEST' text3='VILLA FOR' text4='YOU' />
                    </div>
                    <div className="carousel-item active ">
                        <img src={banner_2} alt="..."/>
                        <SliderContent title='Melbourne,' span='Australia' text='Be Quick!' text1='Get the best' text3='VILLA IN' text4='Twon' />
                    </div>
                    <div className="carousel-item active ">
                        <img src={banner_3}  alt="..."/>
                        <SliderContent title='Miami,' span='South Florida' text='act now' text1='get the' text3='highest level' text4='penthouse' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
  )
}

export default Slider