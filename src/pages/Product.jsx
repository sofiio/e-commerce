import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Bodycontext } from '../components/Context'
import { useParams } from 'react-router-dom'


const Product = () => {
    const { products } = useContext(Bodycontext);
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));
    const {addToCart, cartItems}  = useContext(Bodycontext);
    
    const cartItemAmount = cartItems[id];

    
    // console.log(product);

  

    if (!product) {
        return (
          <div>
            <Navbar />
            <Announcement />
            <div>Product not found</div>
            <Footer />
          </div>
        );
      } 


      const { attributes } = product;
      const { Price, image } = attributes;


      return (
        <div>
          <Navbar />
          <Announcement />
          <div className='flex flex-grow '>
            <div className=' flex-1 mt-4'>
                    <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} className='w-full ml-4'/>
                </div>
    
            <div className='flex-1 mt-4 ml-8'>
              <div className='md:text-[30px] text-[20px] font-bold'>Title</div>
              <div className='md:text-[20px] text-[15px] font-medium'>description </div>
              <div className=' font-bold md:text-[30px] text-[20px]'>{Price} $</div>
    
              <div className='flex justify-between w-[30%]  md:mt-12 mt-6'>
                <div className='flex'>
                  <div className=' font-medium'>Color:</div>
                  <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-black mx-2'></div>
                  <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-blue-600'></div>
                  <div className=' cursor-pointer  w-[30px] h-[30px] rounded-[50%] bg-gray-400 mx-2'></div>
                </div>
    
                <select className=' h-[30px] mr-4'>
                  <option disabled selected>size</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
    
              <div className='mt-8 flex'>
                <div className='flex space-x-4 text-[20px] font-medium'>
                </div>
                <button  onClick={()=> addToCart(id)} className=' border md:text-[12px] text-[8px] px-4 h-[30px] bg-gray-300 border-black hover:bg-lime-600  rounded-lg'>ADD TO CART {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    
















//     if (!product) {
//         return <div>
//             <div>
//         <Navbar/>
//         <Announcement/>
//         <div className='flex '>
//             {/* <div className=' flex-1 mt-4'>
//                 <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} className='w-full object-cover h-[90vh]'/>
//             </div> */}

//             <div className='flex-1 mt-4'>
//                 <div className='text-[30px] font-bold'>Title</div>
//                 <div className='text-[20px] font-medium'>description </div>
//                 <div className='text-[18px]'>{product.Price}</div>
            
//             <div className='flex justify-between w-[30%] mt-12'>
//                 <div className='flex'>
//                     <div className=' font-medium' >Color:</div>
//                     <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-black mx-2'></div>
//                     <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-blue-600'></div>
//                     <div className=' cursor-pointer  w-[30px] h-[30px] rounded-[50%] bg-gray-400 mx-2'></div>
//                 </div>

//                 <select className=' h-[30px]'>
//                     <option disabled selected>size</option>
//                     <option>XS</option>
//                     <option>S</option>
//                     <option>M</option>
//                     <option>L</option>
//                     <option>XL</option>
//                 </select>
                
//             </div>

//             <div className='mt-8 flex justify-between w-[30%]'>
//                 <div className='flex space-x-4 text-[20px] font-medium'>
//                     <div className=' cursor-pointer'>-</div>
//                     <div className='w-[40px] cursor-pointer h-[40px] rounded-[40%] border-2 border-black bg-gray-300 items-center flex justify-center'>1</div>
//                     <div className=' cursor-pointer'>+</div>
//                 </div>
//                 <button className=' border-2 text-[15px] px-4 bg-gray-300 border-black'>ADD TO CART</button>
//             </div>

//             </div>

//         </div>
//         <Footer/>
//     </div>
//         </div>;
//       }


//   return (
//     <div>
//         <Navbar/>
//         <Announcement/>
//         <div className='flex '>
//             {/* <div className=' flex-1 mt-4'>
//                 <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} className='w-full object-cover h-[90vh]'/>
//             </div> */}

//             <div className='flex-1 mt-4'>
//                 <div className='text-[30px] font-bold'>Title</div>
//                 <div className='text-[20px] font-medium'>description </div>
//                 <div className='text-[18px]'>{Price}</div>
            
//             <div className='flex justify-between w-[30%] mt-12'>
//                 <div className='flex'>
//                     <div className=' font-medium' >Color:</div>
//                     <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-black mx-2'></div>
//                     <div className=' cursor-pointer w-[30px] h-[30px] rounded-[50%] bg-blue-600'></div>
//                     <div className=' cursor-pointer  w-[30px] h-[30px] rounded-[50%] bg-gray-400 mx-2'></div>
//                 </div>

//                 <select className=' h-[30px]'>
//                     <option disabled selected>size</option>
//                     <option>XS</option>
//                     <option>S</option>
//                     <option>M</option>
//                     <option>L</option>
//                     <option>XL</option>
//                 </select>
                
//             </div>

//             <div className='mt-8 flex justify-between w-[30%]'>
//                 <div className='flex space-x-4 text-[20px] font-medium'>
//                     <div className=' cursor-pointer'>-</div>
//                     <div className='w-[40px] cursor-pointer h-[40px] rounded-[40%] border-2 border-black bg-gray-300 items-center flex justify-center'>1</div>
//                     <div className=' cursor-pointer'>+</div>
//                 </div>
//                 <button className=' border-2 text-[15px] px-4 bg-gray-300 border-black'>ADD TO CART</button>
//             </div>

//             </div>

//         </div>
//         <Footer/>
//     </div>
//   )
}

export default Product