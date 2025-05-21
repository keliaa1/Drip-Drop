import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollection from '../Components/NewCollection'
import Newsletter from '../Components/Newsletter'

const Shop = () => {
  return (
    <div className='flex flex-col items-center w-full gap-16'>
      <Hero />
     
      <Popular />
      <Offers />
      <NewCollection />
      <Newsletter />

    </div>
  )
}

export default Shop
