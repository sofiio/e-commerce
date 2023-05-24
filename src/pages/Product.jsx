import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'


function Product() {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <div className='flex '>
            <div className=' flex-1 mt-4'>
                <img src='l.png' className='w-full object-cover h-[90vh]'/>
            </div>

            <div className='flex-1 mt-4'>
                <div className='text-[30px] font-bold'>Title</div>
                <div className='text-[20px] font-medium'>description </div>
                <div className='text-[18px]'>20 $</div>
            
            <div className='flex justify-between w-[30%] mt-12'>
                <div className='flex'>
                    <div className=' font-medium' >Color:</div>
                    <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-black mx-2'></div>
                    <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-blue-600'></div>
                    <div className=' cursor-pointer  w-[30px] h-[30px] rounded-[50%] bg-gray-400 mx-2'></div>
                </div>

                <select className=' h-[30px]'>
                    <option disabled selected>size</option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
                
            </div>

            <div className='mt-8 flex justify-between w-[30%]'>
                <div className='flex space-x-4 text-[20px] font-medium'>
                    <div className=' cursor-pointer'>-</div>
                    <div className='w-[40px] cursor-pointer h-[40px] rounded-[40%] border-2 border-black bg-gray-300 items-center flex justify-center'>1</div>
                    <div className=' cursor-pointer'>+</div>
                </div>
                <button className=' border-2 text-[15px] px-4 bg-gray-300 border-black'>ADD TO CART</button>
            </div>

            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Product