import React from "react";
import ResponsiveHeader from "../SubComponents/ResponsiveNavbar";
import Carousel from "../SubComponents/Carousel";

const Testimonial = () => {
    return (
        <>
            <ResponsiveHeader />
            <div className="testimonial-section-wrapper">
                <div className="testimonial-section-top">
                    <p className="primary-heading-testimonial">Testimonial</p>
                    <h1 className="primary-heading">What They Are Saying</h1>
                    <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
                    </p>
                    <Carousel />
                </div>
            </div>
        </>
    );
};

export default Testimonial;