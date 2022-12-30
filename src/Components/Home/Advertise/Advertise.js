import React from 'react';
import ad1 from '../../../assets/Image/ad1.png';
import ad2 from '../../../assets/Image/ad2.png';
import ad3 from '../../../assets/Image/ad3.png';

const Advertise = () => {
    return (
        <div className='px-4 lg:px-8 bg-white flex justify-between gap-x-4 lg:gap-x-10 py-10'>
            <div className=''>
                <img src={ad1} alt='ad_img' />
            </div>
            <div className='flex flex-col gap-y-4 lg:gap-y-7'>
                <img src={ad2} alt='ad_img' />
                <img src={ad3} alt='ad_img' />
            </div>
        </div>
    )
}

export default Advertise