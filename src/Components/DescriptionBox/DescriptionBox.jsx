import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (118)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        Absolutely! Welcome to Zenq Tech, your ultimate destination for cutting-edge electronics! Dive into a world of innovation where top-notch technology meets unbeatable convenience. We bring you a diverse range of gadgets, devices, and accessories to cater to every tech enthusiast's dreams.
        </p>
        <p>
        Stay ahead of the curve with our regularly updated blog and product reviews. Our experts provide insights, tips, and recommendations to help you make informed decisions about your tech purchases. We're not just an e-commerce platform; we're your go-to source for all things tech-related.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
