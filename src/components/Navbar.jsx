import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    // უბრალოდ space-between -  ით სამი დივი ლაგდება კარგად. მარჯვნივ, მარცხნივ და შუაში
    <div className='h-[60px] flex justify-between mt-4'>
        <div className='mx-4 flex flex-1 items-center md:items-start'>
            <h2>EN</h2>
            <div className=' border md:w-[180px] w-[120px] flex justify-between  h-[30px] text-gray-500 px-2 mx-4'>Search
            <Search/>
            </div>
        </div>
        <div className='hidden sm:block'><h2 className=' text-[30px] font-bold flex flex-1'>CHANELLE</h2></div>
        
        <div className='mx-4 flex flex-1 items-center md:items-start justify-end space-x-8'>
        <Link to="/Register"> <h2 className='text-[10px] md:text-[18px]'>REGISTER</h2></Link>
        <Link to="/Login"><h2  className='text-[10px] md:text-[18px]'>SIGN IN</h2></Link>
        <Link to="/Cart"> <ShoppingCartOutlined/></Link>
        </div>
    </div>
  )
}

export default Navbar