import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../Assets/home-banner-image.png";
import { Link } from 'react-router-dom';
import ResponsiveHeader from '../SubComponents/ResponsiveNavbar';

function Home() {
    return (
        <>
            <ResponsiveHeader />
            <div className="home-container App" id='Home'>
                <div className="home-banner-container">
                    <div className="home-text-section">
                        <h1 className="primary-heading">
                            Your Favourite Food Delivered Hot & Fresh
                        </h1>
                        <p className="primary-text">
                            Healthy switcher chefs do all the prep work, like peeding, chopping
                            & marinating, so you can cook a fresh food.
                        </p>
                        <Link to={'/menu'} className="secondary-button-link">
                            <button className="secondary-button">
                                Order Now <FiArrowRight />{" "}
                            </button>
                        </Link>
                    </div>
                    <div className="home-image-section">
                        <img src={BannerImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;