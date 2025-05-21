import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollection from '../Components/NewCollection'

const Shop = () => {
  return (
    <div className='flex flex-col items-center w-full gap-16'>
      <Hero />
     
      <Popular />
      <Offers />
      <NewCollection />

    </div>
  )
}

export default Shop
