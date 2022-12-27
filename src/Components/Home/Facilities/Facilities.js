import React from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { BsArrowCounterclockwise } from 'react-icons/bs';

const Facilities = () => {
    return (
        <div className='px-4 lg:px-8 border-b flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between bg-white py-5'>
            <div className='warrenty flex items-center gap-x-1'>
                <span className='font-bold text-3xl'>2</span>
                <p className='text-base text-[#6D6D6D]'>years warrenty</p>
            </div>
            <div className='shipping flex items-center gap-x-1'>
                <MdLocalShipping className='text-3xl' />
                <p className='text-base text-[#6D6D6D]'>years warrenty</p>
            </div>
            <div className='return flex items-center gap-x-1'>
                <BsArrowCounterclockwise className='text-2xl' />
                <p className='text-base text-[#6D6D6D]'>years warrenty</p>
            </div>
        </div>
    )
}

export default Facilities