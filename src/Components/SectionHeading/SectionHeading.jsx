/* eslint-disable react/prop-types */
import "./SectionHeading.css";

const SectionHeading = (props) => {
    return (
        <div className="sec-5-heading text-center">
            {props.children}
        </div>
    );
};

export default SectionHeading;
