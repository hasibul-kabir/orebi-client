import React, { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/Image/Logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const dmenuref = useRef();

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (dmenuref.current.contains(e.target)) {
                setOpen(true)
            } else {
                setOpen(false)
            }
        })
    }, [])

    return (
        <div className="navbar max-w-full mx-auto px-4 flex justify-between ">
            <div className="brand">
                <a className="btn btn-ghost normal-case text-xl">
                    <img src={Logo} alt='Logo' />
                </a>
            </div>
            <div className='dropdown-menu lg:hidden px-5 cursor-pointer' ref={dmenuref}>
                <HiMenuAlt1 />
            </div>
            {
                open &&
                <div className='absolute top-12 right-8 lg:hidden bg-gray-100 w-1/4'>
                    <ul className='w-full divide-y'>
                        <li className='hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'>Home</li>
                        <li className='hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'>Shop</li>
                        <li className='hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'>About</li>
                        <li className='hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'>Contact</li>
                    </ul>
                </div>
            }
            <div className="hidden lg:flex">
                <ul className="flex space-x-5 ">
                    <li className='rounded-lg hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'><a>Home</a></li>
                    <li className='rounded-lg hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'><a>Shop</a></li>
                    <li className='rounded-lg hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'><a>About</a></li>
                    <li className='rounded-lg hover:bg-primary hover:text-white px-3 py-2 cursor-pointer'><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav