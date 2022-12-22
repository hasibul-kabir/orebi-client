import React from 'react';
import { FaUser } from 'react-icons/fa';
import { RxTriangleDown } from 'react-icons/rx';

const Profile = ({ profileRef, openProfile }) => {
    return (
        <div className='category relative'>
            <div className='flex items-center cursor-pointer' ref={profileRef}>
                <FaUser />
                <RxTriangleDown />
            </div>
            {
                openProfile &&
                <div className='absolute top-10 right-0 w-40'>
                    <ul className='w-full divide-y'>
                        <li className='px-3 py-2 cursor-pointer hover:bg-primary hover:text-white'>Profile</li>
                        <li className='px-3 py-2 cursor-pointer hover:bg-primary hover:text-white'>Dashboard</li>
                        <li className='px-3 py-2 cursor-pointer hover:bg-primary hover:text-white'>Logout</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Profile