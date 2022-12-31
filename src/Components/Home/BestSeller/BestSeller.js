import React from 'react'
import ProductCard from '../../Shared/ProductCard'
import bestSeller from '../../../assets/Image/bestSeller.png'
import bestSeller1 from '../../../assets/Image/bestSeller1.png'
import bestSeller2 from '../../../assets/Image/bestSeller2.png'
import bestSeller3 from '../../../assets/Image/bestSeller3.png'
import bestSP from '../../../assets/Image/bestSP.png';

const BestSeller = () => {
    return (
        <div className='px-4 lg:px-8 bg-white py-5 lg:py-10'>
            <h2 className='font-bold text-2xl'>Our Bestsellers</h2>
            <div className='flex flex-wrap justify-between py-5'>
                <ProductCard badge="New" img={bestSeller} />
                <ProductCard img={bestSeller1} />
                <ProductCard badge="New" img={bestSeller2} />
                <ProductCard img={bestSeller3} />
            </div>
            <div className='py-10'>
                <img src={bestSP} alt="bestSalesProduct" />
            </div>
        </div>
    )
}

export default BestSeller