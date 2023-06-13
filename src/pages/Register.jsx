import React from "react";

function Register() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://img.freepik.com/free-photo/fast-fashion-vs-slow-sustainable-fashion_23-2149134026.jpg?w=1060&t=st=1685869678~exp=1685870278~hmac=1bd6de689abc52a300ccfa9ae48b42fea006f759e775c2704b3e922b15b7bce7)`,
      }}
      className="w-full h-full bg-no-repeat bg-cover"
    >
      <div className="w-[100vw] h-[100vh]  flex items-center justify-center">
        <div className="w-[50%] bg-grey px-4">
          <div className="text-[24px] font-bold mt-2 ">CREATE AN ACCOUNT</div>
          <form className="">
            <input
              placeholder="name"
              className="border border-3 border-black p-1"
            ></input>
            <input
              placeholder="last name"
              className="ml-2 border border-3 border-black p-1"
            ></input>
            <input
              placeholder="username"
              className="ml-2 border border-3 border-black p-1"
            ></input>
            <input
              placeholder="email"
              className="mt-2 border border-3 border-black p-1"
            ></input>
            <input
              placeholder="password"
              className="ml-2 border border-3 border-black p-1"
            ></input>
            <input
              placeholder="confirm password"
              className="ml-2 border border-3 border-black p-1"
            ></input>
            <div className="text-[16px] mt-2">
              {" "}
              By creating an account , I consent to the processing of my
              personal data in according with the{" "}
              <h2 className="font-bold">PRIVACY POLICY</h2>
            </div>
            <button className=" hover:bg-white mt-2 border border-black cursor-pointer bg-green-200 w-[100px] mb-4">
              CREATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
