import React from 'react'
import Advertise from './Advertise/Advertise'
import Banner from './Banner/Banner'
import BestSeller from './BestSeller/BestSeller'
import Facilities from './Facilities/Facilities'
import Header from './Header/Header'
import NewArrivals from './NewArrivals/NewArrivals'

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
            <section id='newarrival'>
                <NewArrivals />
            </section>
            <section id='bestseller'>
                <BestSeller />
            </section>
        </div>
    )
}

export default Home