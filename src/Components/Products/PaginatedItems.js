import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from '../Shared/ProductCard';
import { HiShoppingCart } from 'react-icons/hi';
import newArrival1 from "../../assets/Image/newArrival1.png";
import { BsFillSuitHeartFill, } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';

// Example items, to simulate fetching from another resources.
const items = [...Array(104)];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <ProductCard img={newArrival1}>
                        <div className='absolute bottom-[-6rem] group-hover:bottom-0 group-hover:ease-in duration-300 bg-white w-full p-5'>
                            <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Wish List</span><BsFillSuitHeartFill /></div>
                            <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Compare</span><BiRefresh /></div>
                            <div className='flex items-center justify-end gap-x-2'><span className='text-[#6D6D6D] font-normal hover:font-bold hover:text-black hover:ease-in duration-200'>Add to Cart</span><HiShoppingCart /></div>
                        </div>
                    </ProductCard>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);


    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='flex flex-wrap gap-2 lg:gap-8'>
                <Items currentItems={currentItems} />
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center'>
                <ReactPaginate
                    className='pt-5 flex flex-wrap gap-2 items-baseline'
                    pageClassName="px-2.5 py-1 border-[1px] border-[#D8D8D8]"
                    breakLabel="..."
                    breakClassName="font-bold"
                    previousClassName="hidden"
                    nextClassName="hidden"
                    activeClassName="active bg-black text-white"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
                <p className='text-sm font-normal text-[#767676]'>Products from {itemOffset + 1} to {endOffset < items.length ? endOffset : items.length} of {items.length}</p>
            </div>
        </>
    );
}

export default PaginatedItems;