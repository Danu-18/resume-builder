import React, { useState } from 'react';
import { Dropdown } from 'flowbite-react';

function TabRow() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };    

  return (
    <div className="flex justify-center">
      <ul className="flex flex-wrap justify-center">
        <li className="mr-4">
          <a href="https://www.ebay.com/explore" className="text-md hover:text-blue-500">Explore (New!)</a>
        </li>
        <li className="mr-4 savedTab">
          <a href="https://www.ebay.com/feed" className="text-md hover:text-blue-500">Saved</a>
        </li>
        <li className="mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Electronics</a>
        </li>

        <li className="relative lg:hidden"> 
          <Dropdown
            label="More"
            dismissOnClick={false}
            inline
            className="mr-4 text-md text-slate-600 cursor-pointer hover:text-blue-500"
          >
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Motors</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Fashion</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Collectibles and Art</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Sports</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Health & Beauty</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Industrial Equipment</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Home & Garden</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Deals</a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Sell</a>
            </Dropdown.Item>
          </Dropdown>
        </li>

        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Motors</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Fashion</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Collectibles and Art</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Sports</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Health & Beauty</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Industrial Equipment</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Home & Garden</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Deals</a>
        </li>
        <li className="hidden lg:flex mr-4">
          <a href="https://www.ebay.com/b/Electronics/bn_7000259124" className="text-md hover:text-blue-500">Sell</a>
        </li>
      </ul>
    </div>
  );
}

export default TabRow;
