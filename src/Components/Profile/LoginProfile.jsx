import React from 'react';
import PostForm from '../../PostForm/PostForm';

const LoginProfile = ({ username, email }) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <PostForm />
      
      {/* Add more profile content here */}
    </div>
  );
};

export default LoginProfile;