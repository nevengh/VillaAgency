import './VillasCard.css'

import { Link } from "react-router-dom";
const VillasCard = (props) => {
  return (
    <div className="sec-6-card">
      <img src={props.image} alt="" />
      <div className="card-line-1 d-flex justify-content-between">
        <p> {props.brand} </p>
        <h6>{props.price}</h6>
      </div>
      <h4>18 New Street Miami, OR 97219</h4>
      <div className="card-line-3 mt-4 d-flex">
        <h5 className="me-4">
          {" "}
          Beedrooms : <span>8</span>
        </h5>
        <h5>
          {" "}
          {props.bed} <span>{props.numberbed}</span>
        </h5>
      </div>
      <div className="card-line-3 mt-2 d-flex">
        <h5 className="me-4">
          {" "}
          {props.area} <span>{props.areaspace}</span>
        </h5>
        <h5>
          {" "}
          {props.Floors} <span>{props.floornumb}</span>
        </h5>
      </div>
      <div className="card-line-3 last-card mt-2 d-flex">
        <h5 className="me-4">
          {props.parking} <span>{props.parkingnum}</span>{" "}
        </h5>
      </div>
      <div className="visit-btn text-center mt-5">
        <Link to="/propertyDetails">Schedual Visit</Link>
      </div>
    </div>
  );
};

export default VillasCard;
