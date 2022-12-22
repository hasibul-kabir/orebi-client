import React, { useEffect, useRef, useState } from 'react';
import Cart from './Cart';
import Category from './Category';
import Profile from './Profile';
import Search from './Search';

const Header = () => {
    const [openCategory, setOpenCategory] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const categoryRef = useRef();
    const profileRef = useRef();
    const cartRef = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (e) => {
            if (categoryRef.current.contains(e.target)) {
                setOpenCategory(true)
            } else {
                setOpenCategory(false)
            }

            if (profileRef.current.contains(e.target)) {
                setOpenProfile(true)
            } else {
                setOpenProfile(false)
            }

            if (cartRef.current.contains(e.target)) {
                setOpenCart(true)
            } else {
                setOpenCart(false)
            }
        })
    }, [])

    return (
        <div className='header py-4 flex items-center justify-between'>
            <Category openCategory={openCategory} categoryRef={categoryRef} />
            <Search />
            <div className='flex items-center gap-x-2 lg:gap-x-5'>
                <Profile profileRef={profileRef} openProfile={openProfile} />
                <Cart cartRef={cartRef} openCart={openCart} />
            </div>
        </div>
    )
}

export default Header