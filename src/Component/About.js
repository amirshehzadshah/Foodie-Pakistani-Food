import React from 'react';
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ResponsiveHeader from '../SubComponents/ResponsiveNavbar';

const About = () => {

  return (
    <>
      <ResponsiveHeader />
      <div className="about-section-container" id='About'>
        <div className="about-section-image-container">
          <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-heading-about">About</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
            facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <Link to={'/watchvideo'} className="watch-video-link-button">
              <button className="watch-video-button">
                <BsFillPlayCircleFill /> Watch Video
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;