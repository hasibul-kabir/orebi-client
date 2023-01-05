import React from 'react'
import Header from '../Home/Header/Header'
import ProductBody from './ProductBody'

const Products = () => {
    return (
        <div>
            <section id='header' className='bg-secondary'>
                <Header />
            </section>
            <section>
                <ProductBody />
            </section>
        </div>
    )
}

export default Products