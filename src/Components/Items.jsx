import React from 'react'

const Items = (props) => {
  return (
    <div className='w-[250px] hover:scale-105 transition duration-300'>
      <img src={props.image} alt="" />
      <p className='mt-[6px] mb-[6px]'>{props.name}</p>
      <div className='flex gap-[20px]'>
        <div className='text-[#374151] text-[18px] font-[600px]'>
        ${props.newPrice}
        </div>
        <div className='text-[#8c8c8c] text-[18px] font-[500px] line-through'>
        ${props.oldPrice}
        </div>
      </div>
    </div>
  )
}

export default Items
