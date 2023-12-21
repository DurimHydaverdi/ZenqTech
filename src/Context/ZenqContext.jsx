// ZenqContext.jsx
import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ZenqContext = createContext(null);

const getDefaultCart = ()=> {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0; 
  }
  return cart;
}

const ZenqContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
  });

  const [products, setProducts] = useState(all_product);

  // Update localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1 }));
    console.log(cartItems);
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems)
    {
      if(cartItems[item] > 0)
      {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const addNewProduct = (newProduct) => {
    setProducts((prevProducts) => {
      // Check if the category already exists in the products
      const categoryIndex = prevProducts.findIndex(
        (productCategory) => productCategory.category === newProduct.category
      );
  
      if (categoryIndex !== -1) {
        // If the category exists, update it with the new product
        return prevProducts.map((productCategory, index) =>
          index === categoryIndex
            ? {
                ...productCategory,
                items: [...productCategory.items, newProduct],
              }
            : productCategory
        );
      } else {
        // If the category does not exist, create a new category
        return [
          ...prevProducts,
          { category: newProduct.category, items: [newProduct] },
        ];
      }
    });
  };

  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product: products, cartItems, addToCart, removeFromCart, addNewProduct, };
  return (
    <ZenqContext.Provider value={contextValue}>
      {props.children}
    </ZenqContext.Provider>
  );
};

export default ZenqContextProvider;