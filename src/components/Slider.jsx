import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import { sliderItems } from "./Data";
import styled from "@emotion/styled";

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
          <div key={item.id} className={`${item.bgColor} flex w-[100vw] justify-around`}>
            <div className="w-[500px]">
              <img src={item.img} className=" object-cover mx-12" />
            </div>
            <div className="mt-[200px]">
              <h2 className="font-bold text-[60px]">{item.title}</h2>
              <h2 className="text-[14px] mt-12">
              {item.desc}
              </h2>
              <button className="mt-12 border-2 w-[150px] h-[50px] border-black hover:bg-white">
                Shop Now
                <ArrowRightOutlined />
              </button>
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
