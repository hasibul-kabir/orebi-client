import React from 'react'
import PaginatedItems from './PaginatedItems'

const ProductsContent = () => {
    return (
        <div className='bar w-[80%]'>
            <PaginatedItems itemsPerPage={6} />
        </div>
    )
}

export default ProductsContent