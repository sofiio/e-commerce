import { Gradient } from "@mui/icons-material";
import React from "react";

function Login() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2743.jpg?w=1060&t=st=1685867856~exp=1685868456~hmac=0d7a9216da5add954922c5ac2e4623d3047effce6d69aa548751eeca169567c4)`
      }}
      className="w-full h-full bg-no-repeat bg-cover"
      >

     <div className="z-10  w-[100vw]  h-[100vh] flex items-center justify-center">
   
      <div className="w-[50%] bg-grey px-4">
        <div className="text-[24px] font-bold mt-2 ">SIGN IN</div>
        <form>
          <input
            placeholder="username"
            className="border border-3 border-black p-1"
          ></input>
          <input
            placeholder="password"
            className="ml-2 border border-3 border-black p-1"
          ></input>
          <button className=" bg-green-200 w-[100px] hover:bg-white border border-black h-[32px] ml-2">
            LOGIN
          </button>
          <h2 className="text-[16px] mt-2 underline text-blue-900 cursor-pointer">
            DO NOT YOU REMEMBER THE PASSWORD?
          </h2>
          <h2 className=" underline text-blue-900 cursor-pointer">
            CREATE A NEW ACCOUNT
          </h2>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
