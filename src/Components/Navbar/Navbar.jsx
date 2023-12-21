import React, { useContext, useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo 2.png';
import cart_icon from '../Assets/scicon.png';
import { Link } from 'react-router-dom';
import { ZenqContext } from '../../Context/ZenqContext';

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ZenqContext)

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <a href='/' ><img className='logo' src={logo} alt="Logo" /></a>
        <a href='/' style={{ textDecoration: 'none' }}><p>Zenq Tech</p></a>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("smart watch's")}}><Link style={{ textDecoration: 'none' }} to="/smart watch's">Smart Watch's</Link>{menu==="smart watch's"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("airpods")}}><Link style={{ textDecoration: 'none' }} to='/airpods'>AirPods</Link>{menu==="airpods"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("headphones")}}><Link style={{ textDecoration: 'none' }} to='/headphones'>Headphones</Link>{menu==="headphones"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("others")}}><Link style={{ textDecoration: 'none' }} to='/others'>Other</Link>{menu==="others"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img className='cart' src={cart_icon} alt="Cart Icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;