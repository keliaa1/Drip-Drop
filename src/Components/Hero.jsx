import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className= 'h-screen flex bg-pink-300'>
        <div className='flex-1 flex-col justify-center gap-[20px] pl-[100px] leading-tight pt-[100px] '>
            <h2 className=' font-semibold pb-[20px] text-[20px] text-amber-900'>New Arrivals Only</h2>
            <div>
                <div className='flex align-center gap-[20px]'>
                    <p className='text-3xl text-black pb-3'>New</p>
                    <img className='w-[50px] h-[50px]' src={hand_icon} alt="" />
                </div>
                <p className='text-3xl text-black pb-3'>Collections</p>
                <p className='text-3xl text-black pb-3'>For Everyone</p>
            </div>
            <div>
                <div className=' w-[200px] border-1 bg-fuchsia-300 py-2 px-7 rounded-[75px] cursor-pointer'>Latest Collection</div>
                <img src="{arrow_icon}" alt="" />
            </div>

        </div>
        <div className='flex align-center justify-center'>
    <img src={hero_image} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
