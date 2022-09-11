import React from 'react'
import { Carousel, Featured, Categories, Products, Offer } from './components'

const Home = () => {
    return (
        <>
            <Carousel />
            <Featured />
            <Categories />
            <Products />
            <Offer />
        </>
    )
}

export default Home