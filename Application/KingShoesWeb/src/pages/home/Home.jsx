import React from 'react'
import Carousel from './components/Carousel'
import Featured from './components/Featured'
import Categories from './components/Categories'
import Products from './components/Products'
import Offer from './components/Offer'
import Vendor from './components/Vendor'

const Home = () => {
    return (
        <>
            <Carousel />
            <Featured />
            <Categories />
            <Products />
            <Offer />
            <Products />
            <Vendor />
        </>
    )
}

export default Home