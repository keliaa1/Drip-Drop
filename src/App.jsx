import './index.css'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/shopCategory'
import Cart from './Pages/cart'
import SignUp from './Pages/signUp'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element= {<Shop/>} />
      <Route path="/men" element={<ShopCategory category="men" />}/>
      <Route path="/women" element={<ShopCategory category="women" />}/>
      <Route path="/kids" element={<ShopCategory category="kids" />}/>

      <Route path="/product" element = {<Product />}>
      <Route path=':productId' element = {<Product />} />
      </Route>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/signUp" element={<SignUp />}/>

    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
