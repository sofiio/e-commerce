import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div>
        <Navbar/>
        <Announcement/>
        <div className=''>
            <h2 className=' text-center text-[30px] mt-2'>YOUR BAG</h2>
            <div className='flex items-center justify-between'>
                <button className='border-2 border-black bg-gray-200 lg:w-[180px] w-[70px] sm:w-[120px] mx-4 h-[50px] font-bold lg:text-[15px] text-[8px]'>CONTINUE SHOPPING</button>
                <div className='flex space-x-4'>
                    <h2 className=' underline'>Shopping Bag(2)</h2>
                    <h2 className=' underline'>Your Wishlist(0)</h2>
                </div>
                <button className='border-2 border-black bg-black text-white lg:w-[180px] w-[75px] sm:w-[120px] mx-4 h-[50px] font-bold lg:text-[15px] text-[8px]'>CHECKOUT NOW</button>
            </div>
            <div className='lg:flex mt-8'>
                <div className=''>
                    <div className='flex space-x-12'>
                        <div className='lg:flex mx-4 lg:mx-0'>
                            <img src='so.png' className='w-[650px]'/>
                            <div className=''>
                                <h2><b>Product: </b>JESSIE THUNDER SHOES</h2>
                                <h2><b>ID: </b>123456789</h2>
                                <div><b>Product Color: </b></div>
                                <h2><b>Size: </b>37.5</h2>
                            </div>
                        </div>

                        <div className='flex flex-col items-center'>
                        <div className='flex space-x-4 px-12 xl:px-6'>
                            <div className='text-[30px] cursor-pointer'>+</div>
                            <div className='text-[30px]'>2</div>
                            <div className='text-[30px] cursor-pointer'>-</div>
                        </div>
                        <div className='text-[25px]'>$ 30</div>
                        </div>
                    </div>
                </div>
                <div className='lg:mx-16 lg:w-[300px]  w-[150px] lg:h-[300px] h-[350px] border px-4 mx-4 lg:mx-0 pt-8 mt-6 lg:mt-0'>ORDER SUMMARY
                <div className='flex justify-between mt-4'>Subtotal <div>$ 80</div></div>
                <div  className='flex justify-between'>Estimated Shipping <div>$ 5.90</div></div>
                <div  className='flex justify-between'>Shipping Discount <div>$ -5.90</div></div>
                <div  className='flex justify-between'><b>Total</b> <div>$ 80</div></div>
                <button className='mt-8 bg-black text-white lg:w-[200px] w-[100px] h-[40px] text-[8px] lg:text-[15px]'>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart