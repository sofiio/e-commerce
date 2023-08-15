

import React from "react";
import { useContext } from "react";
import { Bodycontext } from './Context';

export const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(Bodycontext);

  const handleAddToCart = () => {
    addToCart(data.id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(data.id);
  };



  return (
    <>
    <div className="flex flex-col items-center ">
      <img className="w-[300px]" src={`http://localhost:1337${data.attributes.image.data[0].attributes.url}`} alt="" />
      <h3 className=" font-bold text-[20px]">Title</h3>
      <p className="text-[20px]">Price: ${data.attributes.Price}</p>
      <div className="flex space-x-2 text-[20px] ">
        <button className = "w-[50px] bg-green-200 rounded-full" onClick={handleRemoveFromCart}>-</button>
        <span className=" text-red-600 font-bold">{cartItems[data.id]}</span>
        <button className = "w-[50px] bg-green-200 rounded-full" onClick={handleAddToCart}>+</button>
      </div>
    </div>
    </>
  );
};

