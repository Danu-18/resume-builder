import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import FooterTheme from '../Theme/FooterTheme';

function FooterBottum() {
  return (
    <footer class="py-6 mt-10 bg-gray-200 text-gray-600">
    <div class="container mx-auto p-4 px-6 md:px-12 xl:px-20 text-gray-600">
      <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 justify-center">
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">Buy</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">Registration</a></li>
            <li><a class="text-sm hover:text-blue-600">eBay Money Back Guarantee</a></li>
            <li><a class="text-sm hover:text-blue-600">Bidding & buying help</a></li>
            <li><a class="text-sm hover:text-blue-600">Stores</a></li>
          </ul>
        </div>
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">Sell</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">Start selling</a></li>
            <li><a class="text-sm hover:text-blue-600">Learn to sell</a></li>
            <li><a class="text-sm hover:text-blue-600">Affiliates</a></li>
          </ul>
        </div>
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">Community</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">Announcements</a></li>
            <li><a class="text-sm hover:text-blue-600">Discussion boards</a></li>
            <li><a class="text-sm hover:text-blue-600">eBay Giving Works</a></li>
          </ul>
        </div>
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">Stay connected</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">eBay's Blogs</a></li>
            <li><a class="text-sm hover:text-blue-600">Facebook</a></li>
            <li><a class="text-sm hover:text-blue-600">Twitter</a></li>
          </ul>
        </div>
       
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">Help & Contact</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">Seller Information Center</a></li>
            <li><a class="text-sm hover:text-blue-600">Contact us</a></li>
          </ul>
        </div>
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">Tools & apps</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">Developers</a></li>
            <li><a class="text-sm hover:text-blue-600">Security center</a></li>
            <li><a class="text-sm hover:text-blue-600">Site map</a></li>
          </ul>
        </div>
        <div class="flex flex-col justify-start">
          <h2 class="text-lg font-bold">About eBay</h2>
          <ul class="mt-4">
            <li><a class="text-sm hover:text-blue-600">Company info</a></li>
            <li><a class="text-sm hover:text-blue-600">News</a></li>
            <li><a class="text-sm hover:text-blue-600">Investors</a></li>
            <li><a class="text-sm hover:text-blue-600">Careers</a></li>
            <li><a class="text-sm hover:text-blue-600">Government relations</a></li>
            <li><a class="text-sm hover:text-blue-600">Advertise with us</a></li>
            <li><a class="text-sm hover:text-blue-600">Policies</a></li>
            <li><a class="text-sm hover:text-blue-600">Verified Rights Owner (VeRO) Program</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-6">
        <p class="text-sm text-gray-600">Copyright @ 1995-2024 eBay Inc. All Rights Reserved. <a class="text-blue-600 hover:text-blue-800" href="#">Accessibility</a>, <a class="text-blue-600 hover:text-blue-800" href="#">User Agreement</a>, <a class="text-blue-600 hover:text-blue-800" href="#">Privacy</a>, <a class="text-blue-600 hover:text-blue-800" href="#">Consumer Health Data</a>, <a class="text-blue-600 hover:text-blue-800" href="#">Payments Terms of Use</a>, <a class="text-blue-600 hover:text-blue-800" href="#">Cookies</a>, <a class="text-blue-600 hover:text-blue-800" href="#">CA Privacy Notice</a>, <a class="text-blue-600 hover:text-blue-800" href="#">Your Privacy Choices</a> and <a class="text-blue-600 hover:text-blue-800" href="#">AdChoice</a></p>
      </div>
    </div>
  </footer>
  )
}

export default FooterBottum
