import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo 1.png'
import instagram_icon from '../Assets/instagram_icon.webp'
import facebook_icon from '../Assets/facebook_icon.jpg'
import tiktok_icon from '../Assets/tiktok_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img className='footer-zenq' src={footer_logo} alt="" />
        <p>Zenq Tech</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/zenq.tech/" aria-label="Instagram">
            <img className="icons" src={instagram_icon} alt="Instagram" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.facebook.com/tech.zenq" aria-label="Facebook">
            <img className="icons" src={facebook_icon} alt="Facebook" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.tiktok.com/@zenq.tech" aria-label="TikTok">
            <img className="icons" src={tiktok_icon} alt="TikTok" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
