import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  
  if (!product) {
    // Handle the case when product is undefined
    return null; // or any fallback UI
  }

  console.log('Product in Breadcrum:', product);
  return (
    <div className='breadcrum'>
      HOME <img className='arr-icon' src={arrow_icon} alt="Arrow icon" /> SHOP <img className='arr-icon' src={arrow_icon} alt="Arrow icon" /> {product.category} <img className='arr-icon' src={arrow_icon} alt="Arrow icon" /> {product.name}
    </div>
  );
}

export default Breadcrum;