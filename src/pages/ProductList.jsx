import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Products from "../components/Products";


function ProductList() {
  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="mx-4 text-lg font-bold">Dresses</div>
      <div className="flex justify-between mx-4 font-bold">
        <div className="">Filter Products:
        <select>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
        </select>
        <select>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
        </select>
        </div>
        <div>Sort Products:
        <select>
            <option disabled selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
        </select>
        </div>
      </div>
      <Products/>
      <Footer />
    </div>
  );
}

export default ProductList;
