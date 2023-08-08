import React from 'react';
import food from '../Assets/food-landing-image.png';
import tilePrimary from '../Assets/tile-landing-image-primary.png';
import tileSecondary from '../Assets/tile-landing-image-secondary.png';
import { CgChevronRight } from "react-icons/cg";
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function DescLandingPage() {
    // const navigate = useNavigate();

    // function gotohome() {
    //     navigate('/main')
    // }

    return (
        <>
            <div className='landing-container'>
                <div className="landing-banner-container">
                    <div className="landing-text-section">
                        <h1 className="landing-primary-heading">
                            The Real Taste of
                        </h1>
                        <div className='landing-tile-conatiner'>
                            <img src={tilePrimary} alt='' className='tile-image tile-image-primary' />
                            <p className='landing-tile-text'>Pakistani</p>
                        </div>
                        <div className='landing-tile-conatiner'>
                            <img src={tileSecondary} alt='' className='tile-image tile-image-secondary' />
                            <p className='landing-tile-text'>Food</p>
                        </div>
                        <p className="landing-primary-text">
                            Healthy switcher chefs do all the prep work, like peeding, chopping
                            & marinating, so you can cook a fresh food.
                        </p>
                        {/* <button className="landing-secondary-button" onClick={gotohome}>
                            Explore Now <CgChevronRight size={25} />
                        </button> */}
                        <Link to='/main' className="landing-secondary-button">
                            Explore Now <CgChevronRight size={25} />
                        </Link>
                    </div>
                    <div className="landing-image-section">
                        <img src={food} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescLandingPage;