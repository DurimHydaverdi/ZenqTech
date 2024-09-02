import React from 'react';
import ProductForm from '../Product/ProductForm'; 

const Profile = ({ username, email }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <h2>Add New Product</h2>
      <ProductForm />
    </div>
  );
};

export default Profile;