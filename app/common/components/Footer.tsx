// components/Footer.js
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container w-fit grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Latest Posts */}
        <div>
          <h2 className="text-lg font-bold mb-4">Latest Posts</h2>
          <ul>
            <li className="mb-4 grid grid-cols-5 gap-2">
                <div className='col-span-2'>
                    <Image
                        src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                        alt="Daily workouts help you cope better with stress"
                        className="mb-2 w-full h-20 object-cover"
                        height={0}
                        width={0}
                        sizes='100vw'
                    />
                </div>
                <div className='col-span-3'>
                    <a href="#" className="font-semibold">Daily workouts help you cope better with stress</a>
                    <p className="text-sm text-gray-400">April 6, 2017</p>
                </div>
            </li>
            <li className="mb-4 grid grid-cols-5 gap-2">
                <div className='col-span-2'>
                    <Image
                        src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                        alt="How to be successful in bodybuilding, and in life!"
                        className="mb-2 w-full h-20 object-cover"
                        height={0}
                        width={0}
                        sizes='100vw'
                    />

                </div>
                <div className='col-span-3'>
                    <a href="#" className="font-semibold">How to be successful in bodybuilding, and in life!</a>
                    <p className="text-sm text-gray-400">April 6, 2017</p>
                </div>
            </li>
            <li className='grid grid-cols-5 gap-2'>
                <div className='col-span-2'>
                    <Image
                        src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                        alt="The impact of bodybuilding over a social life"
                        className="mb-2 w-full h-20 object-cover"
                        height={0}
                        width={0}
                        sizes='100vw'
                    />

                </div>
                <div className='col-span-3'>
                    <a href="#" className="font-semibold">The impact of bodybuilding over a social life</a>
                    <p className="text-sm text-gray-400">April 6, 2017</p>
                </div>
            </li>
          </ul>
        </div>
        {/* Instagram */}
        <div>
          <h2 className="text-lg font-bold mb-4">Instagram</h2>
          <div className="grid grid-cols-2 gap-4">
            <Image
                src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                alt="Yoga pose"
                className="w-full h-20 object-cover"
                height={0}
                width={0}
                sizes='100vw'
                />
            <Image
                src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                alt="Outdoor exercise"
                className="w-full h-20 object-cover"
                height={0}
                width={0}
                sizes='100vw'
                />
            <Image
                src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                alt="Meditation" 
                className="w-full h-20 object-cover"
                height={0}
                width={0}
                sizes='100vw'
                />
            <Image
                src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg"
                alt="Fitness training"
                className="w-full h-20 object-cover"
                height={0}
                width={0}
                sizes='100vw'
                />
          </div>
        </div>
        {/* Categories */}
        <div>
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Featured</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Fitness Class</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Gym Equipment</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Health</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Lifestyle</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Motivation</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Nutrition</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Routines</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Sport Equipment</a></li>
            <li><a href="#" className="block mb-2 hover:text-gray-400">Videos</a></li>
          </ul>
        </div>
        {/* About Us */}
      </div>
      <div className='ml-auto mr-auto w-[400px]'>
        <h2 className="text-lg font-bold mb-4">About Us</h2>
        <p className="text-gray-400 mb-6">
        Newspaper is your news, entertainment, music fashion website. We provide you with the latest breaking news and videos straight from the entertainment industry.
        </p>
        <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-pinterest"></i></a>
            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center mt-8 text-gray-500">
        &copy; Copyright - Newspaper by Usama
      </div>
    </footer>
  );
}
