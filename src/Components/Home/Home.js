import React from 'react'
import Advertise from './Advertise/Advertise'
import Banner from './Banner/Banner'
import Facilities from './Facilities/Facilities'
import Header from './Header/Header'

const Home = () => {
    return (
        <div className='home bg-secondary max-w-full mx-auto'>
            <section id='header'>
                <Header />
            </section>
            <section id='banner'>
                <Banner />
            </section>
            <section id='facilities'>
                <Facilities />
            </section>
            <section id='advertise'>
                <Advertise />
            </section>
        </div>
    )
}

export default Home