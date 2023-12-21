import React, { useContext, useState } from "react";
import { ZenqContext } from "../Context/ZenqContext";

const ProductForm = () => {
    const { addNewProduct } = useContext(ZenqContext);
  
    const [formData, setFormData] = useState({
      name: "",
      category: "",
      image: null,
      new_price: 0,
      old_price: 0,
    });
  
    const [selectedCategory, setSelectedCategory] = useState("");
    const [error, setError] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!formData.name || !selectedCategory || formData.new_price <= 0 || formData.old_price <= 0) {
        setError("Please fill in all required fields and provide valid prices.");
        return;
      }
  
      setError('');
  
      try {
        // Make a PUT request to your server endpoint for editing an existing product
        // Replace 'productId' with the actual product ID
        const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedProduct),
        });
  
        if (response.ok) {
          alert('Product edited successfully!');
          // Optionally, you can redirect or perform other actions after successful editing
        } else {
          alert('Failed to edit product. Please try again.');
        }
  
        // Move the code for creating a new product, calling addNewProduct, and resetting form data here
        const newProduct = {
          id: generateUniqueId(),
          name: formData.name,
          category: selectedCategory,
          image: formData.image,
          new_price: parseFloat(formData.new_price),
          old_price: parseFloat(formData.old_price),
        };
  
        addNewProduct(newProduct);
  
        setFormData({
          name: "",
          category: "",
          image: null,
          new_price: 0,
          old_price: 0,
        });
  
        // Optionally, clear the selected category as well
        setSelectedCategory("");
      } catch (error) {
        console.error('Error editing product:', error);
        alert('An error occurred. Please try again later.');
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Your form fields here */}
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
  
        <label>Category:</label>
        <input type="text" name="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} />
  
        <label>
          Image:
          <input type="file" accept="image/*" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
        </label>
  
        {/* Add other form fields as needed */}
  
        <button type="submit">Submit</button>
  
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    );
  };
  
  export default ProductForm;