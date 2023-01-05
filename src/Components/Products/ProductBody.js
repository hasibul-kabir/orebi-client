import React from 'react'
import BreadCumbs from '../Shared/BreadCumbs'
import FilterBar from './FilterBar'
import ProductsContent from './ProductsContent'

const ProductBody = () => {
    return (
        <div className='py-10 px-4 lg:px-8'>
            <div className='py-5'>
                <h2 className='font-bold text-2xl'>Products</h2>
                <BreadCumbs />
            </div>
            <div className='flex gap-x-2'>
                <FilterBar />
                <ProductsContent />
            </div>
        </div>
    )
}

export default ProductBody