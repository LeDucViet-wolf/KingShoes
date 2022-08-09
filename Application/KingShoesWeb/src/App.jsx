import React from 'react'
import { useRoutes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import * as Page from './pages'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '', element: <Page.Home /> },
        { path: 'login', element: <Page.Login /> },
        { path: 'register', element: <Page.Register /> },
        { path: 'product-list', element: <Page.ProductList /> },
        { path: 'product-detail/:id', element: <Page.ProductDetail /> },
        { path: 'cart', element: <Page.Cart /> },
        { path: 'checkout', element: <Page.Checkout /> },
        { path: 'contact', element: <Page.Contact /> },
      ]
    },
  ])

  return element
}

export default App