import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { sliderItems } from "./Data";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction=== "left"){
        setSlideIndex(slideIndex> 0 ? slideIndex-1 : 2)
    } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  };

  const Wrapper = styled.div`
  transform : translateX(${(props) => props.slideIndex * -100}vw);
  height:100%;
  display:flex;
  `
  return (
    <div className="w-full  flex relative overflow-hidden ">
      <div
        className="w-[50px] h-[50px] bg-slate-200 cursor-pointer z-20 rounded-[50%] absolute top-0 bottom-0 m-auto mx-4 flex items-center justify-center"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </div>

      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
          <div key={item.id} className={`${item.bgColor} lg:flex w-[100vw] justify-around`}>
            <div className="w-[500px]">
              <img src={item.img} className=" hidden lg:block object-cover mx-12" />
            </div>
            <div className="lg:mt-[200px] pt-[50px]">
              <h2 className="font-bold md:text-[60px] text-[40px] mx-4 lg:mx-0">{item.title}</h2>
              <h2 className="text-[14px] lg:mt-12 mt-24 mx-4 lg:mx-0">
              {item.desc}
              </h2>
              <Link to="/ProductList">
              <button className="mb-4 lg:mb-0 mx-4 lg:mx-0 mt-12 border-2 w-[150px] h-[50px] border-black hover:bg-white">
                Shop Now
                <ArrowRightOutlined />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </Wrapper>

      <div
        className="w-[50px] h-[50px] bg-slate-200 cursor-pointer rounded-[50%] absolute top-0 bottom-0 right-0 m-auto mx-4 flex items-center justify-center"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
}

export default Slider;
