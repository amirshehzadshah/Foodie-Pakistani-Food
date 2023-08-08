import React from "react";
import ResponsiveHeader from "../SubComponents/ResponsiveNavbar";

const Contact = () => {
    return (
        <>
            <ResponsiveHeader />
            <div className="contact-page-wrapper" id="Contact">
                <h1 className="primary-heading">Have Question In Mind?</h1>
                <h1 className="primary-heading">Let Us Help You</h1>
                <div className="contact-form-container">
                    <input type="text" placeholder="yourmail@gmail.com" />
                    <button className="secondary-button">Submit</button>
                </div>
            </div>
        </>
    );
};

export default Contact;