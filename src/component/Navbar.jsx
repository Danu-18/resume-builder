import React, { useState, useEffect } from 'react';
import { Dropdown } from "flowbite-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      <header className='flex text text-xs px-7 justify-center py-2'>
        <ul className='flex'>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/1200px-EBay_logo.svg.png"
              alt="Logo"
              className='w-60 max-[791px]:w-56'
            />
          </li>
          <ul className='flex px-5 gap-4 py-3 max-[790px]:hidden'>
            <li className='cursor-pointer'>
              <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                  <span className='flex text-slate-500'>
                    <li>
                      <p>Shop by</p>
                      <p> Category</p>
                    </li>
                    <li className='text-center px-2 py-2'>
                      <IoMdArrowDropdown />
                    </li>
                  </span>
                )}
              >
                <Dropdown.Item>Motors</Dropdown.Item>
                <Dropdown.Item>Electronic</Dropdown.Item>
                <Dropdown.Item>Home & Garden</Dropdown.Item>
                <Dropdown.Item>Sporting Goods</Dropdown.Item>
              </Dropdown>
            </li>
          </ul>
          <div className="w-full h-10 rounded-3xl border-2 border-black justify-between mt-2 flex gap-5">
            <div className='flex justify-evenly'>
              <FaSearch className='place-self-center ml-4' />
              <input
                type="text"
                placeholder='Search for any thing'
                className='place-self-center rounded-3xl h-8 border-0 w-96 focus:ring-white min-[791px]:w-96 max-[1105px]:w-full'
              />
            </div>
            <Dropdown
              label=""
              dismissOnClick={false}
              renderTrigger={() => (
                <span className='flex cursor-pointer border-l-2 max-[790px]:hidden px-5 place-self-center text-slate-500'>
                  <li className='w-full'>All<span className='text-white'>_</span>Categories</li>
                  <li className='text-center py-1'>
                    <IoMdArrowDropdown />
                  </li>
                </span>
              )}
            >
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
              <Dropdown.Item>Category 3</Dropdown.Item>
              <Dropdown.Item>Category 4</Dropdown.Item>
            </Dropdown>
            <button className='bg-blue-500 min-[791px]:hidden px-4 mx-2 place-self-center h-8 py-2 rounded-full place-items-center ease-in duration-300 text-white'>
              <FaSearch />
            </button>
          </div>
          <div className='flex ml-4 gap-2'>
            <button className='bg-blue-500 text-white max-[790px]:hidden font-bold border-2 border-blue-500 h-10 rounded-3xl mt-2 px-14 hover:bg-blue-700 hover:border-blue-700 ease-in duration-300'>
              Search
            </button>
            <button className='bg-white text-slate-500 font-bold h-10 rounded-3xl mt-2 px-14 max-[970px]:hidden'>
              Advanced
            </button>
          </div>
        </ul>
      </header>

{showScroll && (
  <button
    className="fixed bottom-5 right-5 bg-white text-black p-3 hover:bg-gray-200 w-12 ease-in duration-300 z-50 border border-gray-400" // Set bg-white and border styles
    style={{ zIndex: 1000 }}
    onClick={scrollToTop}
  >
    <img 
      src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" 
      alt="Scroll to top"
      className="w-6 h-6"
    />
  </button>
)}


    </>
  );
}

export default Navbar;
