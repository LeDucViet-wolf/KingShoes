import { Route, Routes } from 'react-router-dom'
import { Home, ProductList, ProductDetail, Cart, Checkout, Contact } from '../pages'

const RoutePages = () => {
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
