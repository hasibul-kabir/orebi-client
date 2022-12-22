import React from 'react';
import { GrSearch } from 'react-icons/gr';

const Search = () => {
    return (
        <div className='relative'>
            <input type='text' placeholder='Search' className='w-auto lg:w-96 mx-auto py-2 px-6 outline-none rounded-md' />
            <GrSearch className='absolute top-3 right-2' />
        </div>
    )
}

export default Search