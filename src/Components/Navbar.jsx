import React from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = React.useState("shop")
   return (
    <div className='flex align-center justify-around p-4 shadow-sm pr-10'>
      <div className='flex align-center justify-center gap-1'>
    <img src={logo} className='w-15 h-15' alt="" />
    <h1 className='text-4xl text-grey-700 font-semibold pt-4'>Crafted Spaces</h1>
      </div>
      <ul className='flex align-center justify-evenly text-lg gap-9 list-none text-gray-500 pt-5 pr-10 '>
        <li  onClick={()=>{setMenu("shop")}} className='flex align-center justify-center gap-1 cursor-pointer hover:text-blue-600 active:text-amber-900'><Link to='/'>Shop</Link></li>
        <li  onClick={()=>{setMenu("Men")}} className='flex align-center justify-center gap-1 cursor-pointer hover:text-blue-600 active:text-amber-900'><Link to='/men'>Men</Link></li>
        <li  onClick={()=>{setMenu("Women")}} className='flex align-center justify-center gap-1 cursor-pointer hover:text-blue-600 active:text-amber-900'> <Link to='/women'>Women</Link></li>
        <li onClick={()=>{setMenu("Kids")}} className='flex align-center justify-center gap-1 cursor-pointer hover:text-blue-600 active:text-amber-900'> <Link to='/kids'>kids</Link></li>
      </ul>
      <div className='flex align-center justify-center gap-9'>
        <Link to='/signUp'><button className='border-1 border-gray-400 py-2 px-7 rounded-full cursor-pointer active:bg-gray-600 active:text-white'>Login</button></Link>
        <Link to='/cart'><img className='w-10 h-10 mt-3' src={cart_icon} alt="cart.png" /></Link>
        <div className='w-6 h-6 p-1 bg-red-600 text-white rounded-full flex align-center justify-center text-[14px] mt-[-3px] ml-[-48px]'>0</div>
      </div>
    </div>
  )
}

export default Navbar
