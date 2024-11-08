import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegBell  } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
function NavHeader() {
    return (
        <>
            <header className='flex text text-xs px-5 justify-between py-2 border-b-2' >
                <ul className='flex'>
                    <li>Hi! <a href="" className='text-blue-500'>Sign in</a> <span className='max-[705px]:hidden'>or <a href="" className='text-blue-500'>register</a></span></li>
                    <ul className='flex px-5 gap-4'>
                        <li className='cursor-pointer cursor-pointer max-[590px]:hidden'>Daily Deals</li>
                        <li className='cursor-pointer cursor-pointer max-[590px]:hidden'>Help & Contact</li>
                    </ul>
                </ul>
                <ul className='flex'>
                    <ul className='flex px-5 gap-4'>
                        <li className='cursor-pointer max-[430px]:hidden'>Sells</li>
                        <li className='cursor-pointer max-[790px]:hidden'>Wishlist</li>
                        <li className='cursor-pointer'><Dropdown label="" dismissOnClick={false} renderTrigger={() => <span className='flex'>My ebay <span className='py-0.5'><IoMdArrowDropdown /></span></span>}>
                            <Dropdown.Item>Summary</Dropdown.Item>
                            <Dropdown.Item>Selling</Dropdown.Item>
                            <Dropdown.Item>my Collection</Dropdown.Item>
                            <Dropdown.Item>Sized</Dropdown.Item>
                        </Dropdown></li>
                    </ul>
                    <ul className='flex flex px-5 gap-4'>
                        <li className='cursor-pointer text-lg max-[430px]:hidden'><FaRegBell /></li>
                        <li className='cursor-pointer text-lg'><FiShoppingCart /></li>
                    </ul>
                </ul>
            </header>
        </>
    )
}

export default NavHeader