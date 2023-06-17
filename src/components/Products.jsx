import React from 'react'
import Product from './Product'
import { popularProducts } from './Data'

function Products() {
  return (
    <div className='grid lg:grid-cols-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-24 space-y-4'>
    {/* თითეოული აითემისთვის მასივიდან, გამოიტანე categoryitem */}
    {popularProducts.map(item=>(<Product item={item} key={item.id}/>))}
</div>
  )
}

export default Products