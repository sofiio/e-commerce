import React from 'react'
import { categories } from './Data'

function CategoryItem({item}) {
  return (
    <div className=' flex-1 m-2 h-[70vh] relative transform transition-transform hover:-translate-y-1 hover:scale-105'>
        <img src={item.img} className='w-full h-full object-cover '/>
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
            <h2 className='lg:text-[50px] text-[30px] md:text-[40px] text-white'>{item.title}</h2>
            <button className='border-2 w-[200px] border-gray-300 text-white hover:bg-white hover:text-black transform transition-transform hover:-translate-y-1 hover:scale-105'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem