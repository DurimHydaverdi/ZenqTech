import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.webp'
import arrow_icon from '../Assets/arrow_icon.webp'
// import hero_image from '../Assets/hero_icon.avif'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img className='hand-icon' src={hand_icon} alt="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img className='arrow-icon' src={arrow_icon} alt="" />
        </div>
      </div>
      {/* <div className='hero-right'></div>
      <img className='hero-image' src={hero_image} alt="" /> */}
    </div>
  )
};

export default Hero;


