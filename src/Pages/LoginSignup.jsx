import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';
import Profile from '../Components/Profile/LoginProfile';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // User registered successfully
        console.log('User registered successfully');
        setLoggedIn(true);

        // Create a product (replace placeholder values with actual data)
        const productResponse = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category: 'your_category_value',
            photo: 'your_base64_encoded_image_data',
            title: 'your_title_value',
            newPrice: 'your_new_price_value',
            oldPrice: 'your_old_price_value',
          }),
        });

        if (productResponse.ok) {
          console.log('Product created successfully');
          // Handle success, e.g., navigate to a success page
        } else {
          console.error('Error creating product:', productResponse.statusText);
          // Handle product creation failure
        }

        // Navigate to the profile page after setting loggedIn
        navigate('/profile');
      } else {
        // Handle registration failure
        console.error('Error during registration:', data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Username' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignUp}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      {loggedIn && <Profile />}
    </div>
  );
};

export default LoginSignup;