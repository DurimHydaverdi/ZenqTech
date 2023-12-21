import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_img.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exlusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check now</button>
      </div>
      <div className="offers-right">
        <img className='exclusive-icon' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers;
