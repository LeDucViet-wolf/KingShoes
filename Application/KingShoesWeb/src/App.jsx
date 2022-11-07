import React from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import * as Page from "@/pages";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "", element: <Page.Home /> },
        { path: "login", element: <Page.Login /> },
        { path: "register", element: <Page.Register /> },
        { path: "profile", element: <Page.Profile /> },
        { path: "product-list", element: <Page.ProductList /> },
        { path: "product-detail", element: <Page.ProductDetail /> },
        { path: "cart", element: <Page.Cart /> },
        { path: "wishlist", element: <Page.Wishlist /> },
        { path: "checkout", element: <Page.Checkout /> },
        { path: "contact", element: <Page.Contact /> },
        { path: "checkout-success", element: <Page.CheckoutSuccess /> },
      ],
    },
  ]);

  return element;
};

export default App;
