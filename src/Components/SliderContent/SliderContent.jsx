/* eslint-disable react/prop-types */
import './SliderContent.css'

const SliderContent = (props) => {
  return (
    <>
        <div className="slider-content">
            <div className="text-1">
                <p>{props.title}<span>{props.span}</span></p>
            </div>
            <div className="text-2">
                <h1>{props.text}</h1>
                <h1>{props.text1}</h1>
                <h1>{props.text3}</h1>
                <h1>{props.text4}</h1>
            </div>
        </div>
    </>
  )
}

export default SliderContent