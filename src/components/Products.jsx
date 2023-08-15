import React from "react";
import {  useContext } from "react";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Bodycontext, BodyProvider } from './Context'
import { Link } from "react-router-dom";

const Categories = () => {


  const { products, sortedProducts } = useContext(Bodycontext);
  
  const images = [];

  products.forEach((item) => {
    const imageAttributes = item.attributes.image.data[0].attributes;
    if (!images.some((image) => image.url === imageAttributes.url)) {
      images.push(imageAttributes);
    }
  });

  return (
    <div className="grid lg:grid-cols-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-24 space-y-4">
      {sortedProducts.map(({ attributes, id }) => {
        const categoryImages = images.filter(
          (image) => image.url === attributes.image.data[0].attributes.url
        );
        return (
          <div
            key={id}
            className="mx-4 relative  flex flex-1 cursor-pointer items-center justify-center"
          >
            <div className="flex flex-col items-center">
              {categoryImages.map((image) => (
                <img
                  src={`http://localhost:1337${image.url}`}
                  alt=""
                  className="relative w-[300px] h-[300px] object-cover"
                />
              ))}
              <h2 className="font-bold text-[20px]">
                {attributes.Price}
                <span>$</span>
              </h2>
            </div>
            <div className="flex opacity-0 hover:opacity-70  bg-slate-400 space-x-4 absolute top-0 left-0 w-full h-full items-center justify-center">
            
            {/* როუთი გავაკეთე app.js ში, რომელსაც დეტალების გვერდზე გადავყავარ */}
            <Link to={`/product/${id}`}>
              <div className="flex w-[40px] bg-white transform hover:scale-110 h-[40px] rounded-[50%] items-center justify-center">
                <SearchOutlined />
              </div>
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
