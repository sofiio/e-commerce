import { createContext } from "react"
import { useState, useEffect } from "react";
import axios from "axios";

export const Bodycontext = createContext(null);

export const BodyProvider = props => {
const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});


  useEffect(() => {
    axios
      .get(
        "http://localhost:1337/api/popular-products?fields=name&populate=image"
      )
      .then(({ data }) => {
        setProducts(data.data);
        setSortedProducts(data.data); // Initialize sortedProducts with the data from the API
        setCartItems(getDefaultCart());
      })
      .catch((error) => setError(error));
  }, []);
  
  // if (error) {
  //   // Print errors if any
  //   return <div>An error occurred: {error.message}</div>;
  // };

  useEffect(() => {
    setCartItems(getDefaultCart());
  }, [products]); // Update cartItems when products state changes

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= products.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const images = [];

  products.forEach((item) => {
    const imageAttributes = item.attributes.image.data[0].attributes;
    if (!images.some((image) => image.url === imageAttributes.url)) {
      images.push(imageAttributes);
    }
  });


  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] +1}));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}));
  };

  

  const contextValue = {
    error,
    setError,
    products,
    setProducts,
    sortedProducts,
    setSortedProducts,
    cartItems,
    addToCart,
    removeFromCart
  };

  console.log(cartItems)



return(
    <Bodycontext.Provider value={contextValue}>
        {props.children}
    </Bodycontext.Provider>
)}