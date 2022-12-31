import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import logo from '../../assets/Image/Logo.png';

const Footer = () => {
    return (
        <div className='px-4 lg:px-8 bg-secondary py-12'>
            <div className='flex flex-col-reverse gap-y-5 justify-center lg:flex-row'>
                <div className='lg:w-[15%]  text-center lg:text-left'>
                    <h5 className='font-bold text-md'>MENU</h5>
                    <ul className='text-sm text-[#6D6D6D] leading-loose'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Journal</li>
                    </ul>
                </div>
                <div className='lg:w-[15%] text-center lg:text-left'>
                    <h5 className='font-bold text-md'>SHOP</h5>
                    <ul className='text-sm text-[#6D6D6D] leading-loose'>
                        <li>Category1</li>
                        <li>Category2</li>
                        <li>Category3</li>
                        <li>Category4</li>
                        <li>Category5</li>
                    </ul>
                </div>
                <div className='lg:w-[15%] text-center lg:text-left'>
                    <h5 className='font-bold text-md'>HELP</h5>
                    <ul className='text-sm text-[#6D6D6D] leading-loose'>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Special E-shop</li>
                        <li>Shipping</li>
                        <li>Secure Payments</li>
                    </ul>
                </div>
                <div className='lg:w-[25%] text-center lg:text-left'>
                    <p className='font-bold text-base'>(052) 611-5711</p>
                    <p className='font-bold text-base'>company@domain.com</p>
                    <span className='text-sm text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</span>
                </div>
                <div className='lg:w-[30%] mx-auto'>
                    <img src={logo} alt='brand_logo' />
                </div>
            </div>

            {/* Footer Botto */}
            <div className='flex flex-col gap-y-2 lg:flex-row lg:justify-between justify-center items-center mt-5 text-center'>
                <div className='flex gap-x-4 items-center'>
                    <FaFacebookF />
                    <AiFillLinkedin />
                    <FiInstagram />
                </div>
                <p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
        </div>
    )
}

export default Footer