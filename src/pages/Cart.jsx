import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { CartItem } from "../components/CartItem";
import Product from "./Product";
import { Bodycontext } from "../components/Context";

export default function Cart() {
  const { products, sortedProducts, cartItems } = useContext(Bodycontext);

  const images = [];

  return (
    <div className="flex flex-col min-h-screen">
    
      <Navbar />
      <Announcement />

      <div className=" flex-1 flex-col items-center flex">
  {Object.values(cartItems).some((count) => count > 0) ? (
    <div>
      {sortedProducts.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <CartItem key={product.id} data={product} />
          );
        }
        return null; // Return null for products with count 0
      })}
      <button className=" w-[300px] h-[30px] mt-4 bg-slate-400 hover:bg-green-400 rounded-lg text-white">Pay Now</button>
    </div>
  ) : (
    <h2>No Items Added</h2>
  )}
</div>
      <Footer />
    </div>
  );
}
