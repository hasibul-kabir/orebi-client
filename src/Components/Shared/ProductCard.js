import React from 'react';

const ProductCard = ({ badge, img, children }) => {
    return (
        <div className='lg:max-w-[310px] max-w-fit shadow-sm mx-1'>
            <div className='relative overflow-hidden group'>
                <img src={img} alt="newProductImg" />
                {
                    badge &&
                    <div className='absolute top-5 left-5'><p className='bg-black text-white text-sm font-bold px-6 py-2'>{badge}</p></div>
                }
                {
                    children
                }

            </div>
            <div className='flex justify-between py-2'>
                <div>
                    <h5 className='font-bold text-lg'>Basic Crew Neck Tee</h5>
                    <p className='font-normal text-base text-[#6D6D6D] mt-2'>Black</p>
                </div>
                <div>
                    <p className='font-normal text-base text-[#6D6D6D]'>$44.0</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard