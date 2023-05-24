import React from 'react'
import { categories } from './Data'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <>
    <div className='grid grid-cols-3'>
        {/* თითეოული აითემისთვის მასივიდან, გამოიტანე categoryitem */}
        {categories.map(item=>(<CategoryItem item={item} key={item.id}/>))}
    </div>
    </>
  )
}

export default Categories