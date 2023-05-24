import React from 'react'
import { popularProducts } from './Data'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

function Product({item}) {
  return (
   <div className=' mx-4 relative  flex flex-1 cursor-pointer items-center justify-center'> 
    <img src={item.img}  className='relative w-[300px] h-[300px] object-cover'/>
    <div className='flex opacity-0 hover:opacity-70  bg-slate-400 space-x-4 absolute top-0 left-0 w-full h-full items-center justify-center'>
        <div className='flex w-[40px] bg-white transform hover:scale-110 h-[40px] rounded-[50%] items-center justify-center'>
            <ShoppingCartOutlined/>
        </div>
        <div className='w-[40px] h-[40px] bg-white transform hover:scale-110 rounded-[50%]  items-center flex justify-center'>
            <SearchOutlined/>
        </div>
        <div className='w-[40px] h-[40px] bg-white transform hover:scale-110 rounded-[50%] items-center flex justify-center'>
            <FavoriteBorderOutlined/>
        </div>
    </div>
   </div>
  )
}

export default Product