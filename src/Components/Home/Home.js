import React from 'react'
import Banner from './Banner/Banner'
import Header from './Header/Header'

const Home = () => {
    return (
        <div className='home bg-secondary max-w-full mx-auto px-8'>
            <section id='header'>
                <Header />
            </section>
            <section>
                <Banner />
            </section>
        </div>
    )
}

export default Home