import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'


function Navbar() {
  return (
    // უბრალოდ space-between -  ით სამი დივი ლაგდება კარგად. მარჯვნივ, მარცხნივ და შუაში
    <div className='h-[60px] flex justify-between mt-4'>
        <div className='mx-4 flex flex-1'>
            <h2>EN</h2>
            <div className=' border w-[180px] flex justify-between  h-[30px] text-gray-500 px-2 mx-4'>Search
            <Search/>
            </div>
        </div>
        <div><h2 className=' text-[30px] font-bold flex flex-1'>CHANELLE</h2></div>
        <div className='mx-4 flex flex-1 justify-end space-x-8'>
          <h2>REGISTER</h2>
          <h2>SIGN IN</h2>
          <ShoppingCartOutlined/>
        </div>
    </div>
  )
}

export default Navbar