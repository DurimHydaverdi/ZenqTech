import React, { useContext } from 'react';
import './CSS/ZenqCategory.css';
import { ZenqContext } from '../Context/ZenqContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ZenqContext);

  // Use all_product in your code, or comment out the line if not needed
  // console.log(all_product);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of products
        </p>
        <div className="shopcategory-sort">
          Sort by <img className='dropdown-icon' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
      {all_product.map((item, i) => {
        if (props.category.toLowerCase() === item.category.toLowerCase()) {
          const image = Array.isArray(item.images) ? item.images[0] : item.image;
          return <Item key={i} id={item.id} name={item.name} image={image} new_price={item.new_price} old_price={item.old_price}/>
        } else {
          return null;
        }
      })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;