import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ProductList from '../pages/product-list/ProductList'
import ProductDetail from '../pages/product-detail/ProductDetail'
import Cart from '../pages/cart/Cart'
import Checkout from '../pages/checkout/Checkout'
import Contact from '../pages/contact/Contact'

const RoutePages = () => {
  const auth = localStorage.getItem('token')
  return (
    <Routes>
      {
        <>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </>
      }
    </Routes>
  )
}

export default RoutePages
