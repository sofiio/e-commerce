import React from "react";
import axios from 'axios';
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
 
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  
  
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories?fields=name&populate=image")
      .then(({ data }) => {
      setCategories(data.data);
      console.log(categories)
    })
    
    .catch((error) => setError(error));
  }, [])
 

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

 
  const images = [];

  categories.forEach((item) => {
  const imageAttributes = item.attributes.image.data[0].attributes;
  if (!images.some((image) => image.url === imageAttributes.url)) {
    images.push(imageAttributes);
  }
});
  

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
        {/* თითეოული აითემისთვის მასივიდან, გამოიტანე categoryitem */}
        {/* {categories.map(item=>(<CategoryItem item={item} key={item.id}/>))} */}

        {categories.map(({attributes,  id}) => {
           const categoryImages = images.filter((image) => image.url === attributes.image.data[0].attributes.url);
             return(
              <>
                <div key={id}  className=" flex-1  m-2 h-[70vh] relative transform transition-transform ">
                  {categoryImages.map(image => (
                  <img src={`http://localhost:1337${image.url}`}  alt="" className="w-full h-full object-cover" />
                  ))}
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <h2 className="lg:text-[50px] text-[30px] md:text-[40px] text-white">
                      {attributes.name}
                    </h2>
                    <Link to="/ProductList">
                    <button className="border-2 w-[200px] border-gray-300 text-white hover:bg-white hover:text-black transform transition-transform hover:-translate-y-1 hover:scale-105">
                      SHOP NOW
                    </button>
                    </Link>
                  </div> 
                </div>
              </>
            )
        }
       )}

      </div>
    </>
    );
    }

export default Categories;


