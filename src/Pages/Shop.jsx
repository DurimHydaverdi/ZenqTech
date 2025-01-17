import React from 'react'
import Hero from '../Components/Hero/hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewProducts from '../Components/NewProducts/NewProducts';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewProducts/>
      <NewsLetter/>
    </div>
  )
};

export default Shop
