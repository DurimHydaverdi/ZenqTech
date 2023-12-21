import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ZenqContext } from '../../Context/ZenqContext';
import { useState } from 'react';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ZenqContext);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const handlePhotoClick = (index) => {
    setSelectedPhotoIndex(index);
  };

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        {product.images && Array.isArray(product.images) && (
          <div className='productdisplay-img-list'>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                onClick={() => handlePhotoClick(index)}
                className={index === selectedPhotoIndex ? 'selected' : ''}
              />
            ))}
          </div>
        )}
        {product.image && !Array.isArray(product.image) && (
          <div className='productdisplay-img-list'>
            <img
              src={product.image}
              alt={`Product`}
              className='selected'
            />
          </div>
        )}
        <div className='productdisplay-img'>
          {product.images && Array.isArray(product.images) && (
            <img
              className='productdisplay-main-img'
              src={product.images[selectedPhotoIndex]}
              alt='Main Product'
            />
          )}
          {product.image && !Array.isArray(product.image) && (
            <img
              className='productdisplay-main-img'
              src={product.image}
              alt='Main Product'
            />
          )}
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img className="stars" src={star_icon} alt="" />
            <img className="stars" src={star_icon} alt="" />
            <img className="stars" src={star_icon} alt="" />
            <img className="stars" src={star_icon} alt="" />
            <img className="stars" src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        2023 Smart Watch with Bluetooth calling, receiving notifications, pedometer, blood pressure check, add your personal photo to the dial. Other options include listening to music, take pictures and tracking exercise.
        </div>
       <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
       <p className='productdisplay-right-category'><span>Category:</span> Smart Watch</p>
       <p className='productdisplay-right-category'><span>Tags:</span> Modern Lateset</p>
      </div>
    </div>
  );
};

export default ProductDisplay
