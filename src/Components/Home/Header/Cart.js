import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import Image from '../../../assets/Image/Image.png';
import { ImCross } from 'react-icons/im';

const Cart = ({ cartRef, openCart }) => {
    return (
        <div className='relative'>
            <div className='cart-icon' ref={cartRef}>
                <FaShoppingCart className='cursor-pointer' />
            </div>
            {
                openCart &&
                <div className='absolute top-10 right-0 w-max  border border-secondary'>
                    <div className='product flex items-center gap-x-10 p-5 bg-secondary'>
                        <div className='flex items-center gap-x-3'>
                            <img src={Image} alt='product_img' />
                            <div>
                                <p className='font-bold mb-2'>Black Sunglass</p>
                                <p className='font-bold'>$44</p>
                            </div>
                        </div>
                        <ImCross />
                    </div>
                    <div className='p-5'>
                        <p className='font-bold pb-5'><span className='font-midium text-zinc-400 pr-2'>Subtotal:</span>$44.00</p>
                        <div className='btns flex justify-between'>
                            <button className='px-6 py-2 border border-primary hover:bg-primary hover:text-white font-bold'>View Cart</button>
                            <button className='px-6 py-2 border border-primary hover:bg-primary hover:text-white font-bold'>Checkout</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart