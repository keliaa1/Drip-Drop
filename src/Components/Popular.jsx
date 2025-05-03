import React from 'react'
import data_product from '../Assets/data'
import Items from './Items'

const Popular = () => {
  return (
    <div className=' align-center gap-[10px]'>
      <h2 className='text-[#171717] text-5xl font-semibold text-center pt-3.5 pb-7'>Popular in Women</h2>
      <div className='mt-[50px] flex gap-[50px] justify-center'>
        {data_product.map((items, i) => (
          <Items key={i} id={items.id} image={items.image} name={items.name} newPrice={items.new_price} oldPrice={items.old_price} />
        ))}
      </div>
    </div>
  )
}

export default Popular
