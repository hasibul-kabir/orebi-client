import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';

const Category = ({ openCategory, categoryRef }) => {
    return (
        <div className='category relative'>
            <div className='flex items-center gap-x-2 cursor-pointer' ref={categoryRef}>
                <HiMenuAlt1 />
                <p className='text-sm hidden lg:block font-normal'>Shop by Category</p>
            </div>
            {
                openCategory &&
                <div className='absolute top-10 left-2  bg-primary w-40 lg:w-48 z-10'>
                    <ul className='w-full divide-y'>
                        <li className='text-white px-3 py-2 cursor-pointer hover:font-bold hover:pl-5 ease-in duration-200'>Accesories</li>
                        <li className='text-white px-3 py-2 cursor-pointer hover:font-bold hover:pl-5 ease-in duration-200'>Furniture</li>
                        <li className='text-white px-3 py-2 cursor-pointer hover:font-bold hover:pl-5 ease-in duration-200'>Electronics</li>
                        <li className='text-white px-3 py-2 cursor-pointer hover:font-bold hover:pl-5 ease-in duration-200'>Clothes</li>
                        <li className='text-white px-3 py-2 cursor-pointer hover:font-bold hover:pl-5 ease-in duration-200'>Bags</li>
                        <li className='text-white px-3 py-2 cursor-pointer hover:font-bold hover:pl-5 ease-in duration-200'>Home appliances</li>
                    </ul>
                </div>
            }

        </div>
    )
}

export default Category