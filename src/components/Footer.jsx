import { MailOutline, Phone, Room } from "@mui/icons-material";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row pb-6 mt-6 bg-pink-50">
        {/* flex1 - ტოლ ნაწილებად დაყობს გვერდით მდებარე დივებს */}
      <div className=" flex-1 mx-4">
        <h2 className="font-bold text-lg mt-6">CHANELL.</h2>
        <h2 className=" mt-6 text-[20px]">
          Trere are many variations of Lorem impsum available, but tre majority
          have suffered alteration in some form, by injected humor, or
          randomised words which don't have even slightly believable
        </h2>
      </div>

      <div className=" flex-1 md:ml-[80px] ml-4">
      <h2 className="font-bold mt-6">Useful Links</h2>
      <div className="flex">
        <div className="text-[18px] mt-6">
            <h2>Home</h2>
            <h2>Man Fashion</h2>
            <h2>Accessories</h2>
            <h2>Order Tracking</h2>
            <h2>Wishlist</h2>
        </div>
        <div className="text-[18px] mt-6 lg:ml-28 ml-4">
        <h2>Home</h2>
            <h2>Cart</h2>
            <h2>Woman Fashion</h2>
            <h2>My Account</h2>
            <h2>Terms</h2>
        </div>
      </div>
      </div>
      <div className=" flex-1  ml-4 md:ml-0">
        <h2 className="text-[20px] font-bold mt-4">Contact</h2>
        <div className="flex items-center space-x-4">
        <Room className="mt-4"/>
        <h2 className="mt-6 text-[18px]">622 Dixie Path. South Tobinchester 9298</h2>
        </div>
        <div className="flex items-center space-x-4 mt-4"> 
        <Phone/>
        <h2 className="text-[18px]">+ 1 234 56 78</h2>
        </div>
        <div className="flex items-center space-x-4 mt-4">
        <MailOutline/>
        <h2 className="text-[18px]">contact@chanelle.dev</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
