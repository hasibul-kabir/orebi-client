import React from 'react'
import ProductCard from '../../Shared/ProductCard'
import Slider from "react-slick";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi';
import newArrival1 from "../../../assets/Image/newArrival1.png";
import newArrival2 from "../../../assets/Image/newArrival2.png";
import newArrival3 from "../../../assets/Image/newArrival3.png";
import newArrival4 from "../../../assets/Image/newArrival4.png";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <span
            className='absolute top-[38%] right-0 z-10'
            style={{ ...style }}
            onClick={onClick}
        >
            <FaAngleRight className='text-3xl text-black' />
        </span>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <span
            className='absolute top-[38%] left-0 z-10'
            style={{ ...style }}
            onClick={onClick}
        >
            <FaAngleLeft className='text-3xl text-black' />
        </span>
    );
}

const NewArrivals = () => {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='px-4 lg:px-8 bg-white py-5 lg:py-10'>
            <h2 className='font-bold text-2xl'>New Arrivals</h2>
            <Slider {...settings} className="py-5">
                <ProductCard img={newArrival1}>
                    <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                    </div>
                </ProductCard>
                <ProductCard badge="New" img={newArrival2}>
                    <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                    </div>
                </ProductCard>
                <ProductCard img={newArrival3}>
                    <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                    </div>
                </ProductCard>
                <ProductCard badge="New" img={newArrival4}>
                    <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                    </div>
                </ProductCard>
                <ProductCard img={newArrival1}>
                    <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                    </div>
                </ProductCard>
                <ProductCard badge="New" img={newArrival2}>
                    <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                        <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                    </div>
                </ProductCard>

            </Slider>
        </div>
    )
}

export default NewArrivals