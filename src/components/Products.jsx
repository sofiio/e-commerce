import React from 'react'
import Product from './Product'
import { popularProducts } from './Data'

function Products() {
  return (
    <div className='grid grid-cols-4 mt-24 space-y-4'>
    {/* თითეოული აითემისთვის მასივიდან, გამოიტანე categoryitem */}
    {popularProducts.map(item=>(<Product item={item} key={item.id}/>))}
</div>
  )
}

export default Products