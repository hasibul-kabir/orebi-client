import React from 'react'
import Header from './Header/Header'

const Home = () => {
    return (
        <div className='home bg-secondary max-w-full mx-auto px-8'>
            <section id='header'>
                <Header />
            </section>
        </div>
    )
}

export default Home