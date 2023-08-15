import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import ProductListFilter from "../components/ProductListFilter";

function ProductList() {

  return (
    <div>
      <Navbar />
      <Announcement />
      <ProductListFilter />
      <Products />
      <Footer />
    </div>
  );
}

export default ProductList;
