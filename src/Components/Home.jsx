import React from 'react';
import Header from './Header';
import Category from './Category';
import ToProducts from './ToProducts';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <ToProducts />
        </div>
    )
}

export default Home
