import { Route, Routes } from 'react-router-dom'
import * as Page from '../pages'

const RoutePages = () => {
  return (
    <Routes>
      {
        <>
          <Route path="/" element={<Page.Home />} />
          <Route path="/login" element={<Page.Login />} />
          <Route path="/register" element={<Page.Register />} />
          <Route path="/product-list" element={<Page.ProductList />} />
          <Route path="/product-detail/:id" element={<Page.ProductDetail />} />
          <Route path="/cart" element={<Page.Cart />} />
          <Route path="/checkout" element={<Page.Checkout />} />
          <Route path="/contact" element={<Page.Contact />} />
        </>
      }
    </Routes>
  )
}

export default RoutePages
