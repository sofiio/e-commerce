import React from "react";
import { useState,  useContext } from "react";
import { Bodycontext, BodyProvider } from './Context'

function ProductListFilter() {
  const { sortedProducts, setSortedProducts } = useContext(Bodycontext);
  const [selectedOption, setSelectedOption] = useState('');
  const handleAscFilterClick = () => {
    const sortedDataAsc = [...sortedProducts].sort(
      (a, b) => a.attributes.Price - b.attributes.Price
    );
    setSortedProducts(sortedDataAsc);
  };

  const handleDescFilterClick = () => {
    const sortedDataDesc = [...sortedProducts].sort(
      (a, b) => b.attributes.Price - a.attributes.Price
    );
    setSortedProducts(sortedDataDesc );
  };


  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'option1') {
      handleAscFilterClick();
    } else if (selectedValue === 'option2') {
      handleDescFilterClick();
    }
  };

  return (
    <>
      <div className="mx-4 text-lg font-bold">Products</div>
      <div className="lg:flex justify-between mx-4 font-bold">
        <div className="">
          Filter Products:
        </div>
        <div>
          Sort Products:
          <select value={selectedOption} onChange={handleChange}>
            <option disabled selected>
              Newest
            </option>
            <option value="option1">Price (asc)</option>
            <option value="option2">Price (desc)</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default ProductListFilter;
