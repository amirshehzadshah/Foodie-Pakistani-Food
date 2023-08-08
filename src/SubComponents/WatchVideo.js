import React from 'react';
import watchvideo from '../Assets/Cinematic B-Roll BURGER.mp4';
import { Link } from 'react-router-dom';
import ResponsiveHeader from './ResponsiveNavbar';

const WatchVideo = () => {
  return (
    <>
      <ResponsiveHeader />
      <div className="main-watch-video">
        <div className="container-watch-video">
          <div className="video-container-watch-video">
            <video className='video-watch-video' width="880" height="270" controls loop>
              <source src={watchvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="watch-video-section-text-container">
            <h1 className="watch-video-primary-heading">
              Watch Video
            </h1>
            <p className="watch-video-primary-text">
              Our cookbook, Love Real Food, is here! Get your copy ↣Love Real FoodUltimate Veggie Pizza 94 CommentsJUMP TO RECIPE best veggie pizza recipe As a vegetarian for over a decade, I’ve eaten quite a few veggie pizzas. Truly fantastic veggie pizzas are few and far between. So, I combined all of the elements I’ve enjoyed over the years to create my own “ultimate” veggie pizza recipe. This is the best homemade veggie pizza I’ve ever had, and I hope you’ll say the same!
            </p>
            <div className='watch-video-bottom-buttons'>
              <Link to={'/menu'} className="watch-video-continueshopping-button">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchVideo