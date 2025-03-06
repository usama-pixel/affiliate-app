// components/Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className='rounded-full overflow-hidden'>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/013/993/061/non_2x/mugiwara-the-illustration-vector.jpg"
              alt="Fitness Blog Logo"
              width={50}
              height={50}
            />
          </div>
          <span className="text-2xl font-bold text-gray-900">FITNESS <span className="text-orange-500">blog</span></span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-semibold text-gray-900">
          <Link href="/home" className="hover:text-orange-500">Home</Link>
          <Link href="/training" className="hover:text-orange-500">Training</Link>
          <Link href="/nutrition" className="hover:text-orange-500">Nutrition</Link>
          <Link href="/motivation" className="hover:text-orange-500">Motivation</Link>
          <Link href="/videos" className="hover:text-orange-500">Videos</Link>
          <Link href="/more" className="hover:text-orange-500">More</Link>
        </nav>

        {/* Icons */}
        <div className="flex flex-col items-center gap-2">
          <div className='flex flex-row gap-3 h-fit'>
            <Link href={'/login'}><button className='bg-primary text-white px-4 py-2 rounded-lg'>Login</button></Link>
            <button className='bg-secondary text-black px-4 py-2 rounded-lg'>Signup</button>
          </div>
          <div className='flex items-center space-x-4'>
            <div className="hidden md:flex space-x-2 text-gray-500">
              <a href="#" className="hover:text-orange-500"><FaFacebook /></a>
              <a href="#" className="hover:text-orange-500"><FaInstagram /></a>
              <a href="#" className="hover:text-orange-500"><FaLinkedin /></a>
              <a href="#" className="hover:text-orange-500"><FaPinterest /></a>
              <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            </div>
            <FiSearch className="text-gray-500 text-xl hover:text-orange-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}
