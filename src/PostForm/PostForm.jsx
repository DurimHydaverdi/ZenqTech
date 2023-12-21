import React, { useState } from 'react';

const PostForm = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [error, setError] = useState('');

  // Assume you have a function to compress the photo
  const compressPhoto = (photo) => {
    // Your logic to compress the photo
    return photo;
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    // Define 'compressed' using 'let' to make it accessible within the entire function
    let compressed;

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // The result will be a base64 encoded image data
        const imageData = reader.result;
         // Assume you have a function to compress the photo
        compressed = compressPhoto(imageData);
        setPhoto(compressed);
      };

      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if required fields are filled
    if (!selectedCategory || !photo || !title || !newPrice || !oldPrice) {
      setError('Please fill in all the required fields.');
      return;
    }
  
    // Prepare the data to be sent to the server
    const formData = {
      category: selectedCategory,
      photo: compressPhoto(photo), // Use compressPhoto function instead of compressed
      title,
      newPrice,
      oldPrice,
    };
  
    try {
      // Make a POST request to your server endpoint
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        alert('Product created successfully!');
        // Clear the form fields after submission if needed
        setSelectedCategory('');
        setPhoto(null);
        setTitle('');
        setNewPrice('');
        setOldPrice('');
      } else {
        // Handle errors
        alert('Failed to create product. Please try again.');
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
  Category:
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
  >
    <option value="">Select a category</option>
    <option value="smart watches">Smart Watch's</option>
    <option value="airpods">AirPods</option>
    <option value="headphones">Headphones</option>
    <option value="other">Other</option>
  </select>
</label>

      <label>
        Photo:
        <input type="file" onChange={(e) => handlePhotoChange(e)} />
      </label>
        Text:
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>
        New Price:
        <input type="text" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
      </label>

      <label>
        Old Price:
        <input type="text" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
      </label>

      <button type="submit">Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default PostForm;