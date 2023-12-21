import React, { useContext } from 'react'
import './CartItems.css'
import { ZenqContext } from '../../Context/ZenqContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ZenqContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          const itemTotal = (e.new_price * cartItems[e.id]).toFixed(2);
        return (
            <div>
            <div className="cartitems-format cartitems-format-main">
            {Array.isArray(e.images) && e.images.length > 0 && (
                  <img className='carticon-product-icon' src={e.images[0]} alt="" />
                )}
                {!Array.isArray(e.images) && (
                  <img className='carticon-product-icon' src={e.image} alt="" />
                )}
                <p>{e.name}</p>
                <p>${e.new_price.toFixed(2)}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${itemTotal}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
      </div>
            );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount().toFixed(2)}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount().toFixed(2)}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
