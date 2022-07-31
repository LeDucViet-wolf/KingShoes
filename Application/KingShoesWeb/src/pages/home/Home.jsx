import React from 'react'
import { Carousel, Featured, Categories, Products, Offer, Vendor } from './components'

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