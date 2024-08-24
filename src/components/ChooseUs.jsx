import React from 'react';
import { FaBus } from 'react-icons/fa';
const ChooseUs = () => {
  return (
    <>
    <div className='py-14 md:py-28'>
        <div className="container">
            {/* heading section */}
            <h1 data-aos='fade-up' data-aos-delay='300' className='pb-16 tracking-wider text-2xl font-bold text-black text-center'>Why Choose Us?</h1>

            {/* card section */}
            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-14 sm:gap-4'>
                    {/* 1st card */}
                    <div data-aos='fade-up' data-aos-delay='500' className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                        <p className='text-black font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-5xl text-pink-800 rotate-90 text-center translate-x-5'>.....</p>
                        <FaBus className='text-5xl text-pink-800'/>
                    </div>

                    {/* 2nd card */}
                    <div data-aos='fade-down' data-aos-delay='500' className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                        <FaBus className='text-5xl text-pink-400'/>
                        <p className='text-5xl text-pink-400 rotate-90 text-center translate-x-5'>.....</p>
                        <p className='text-black font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    {/* 3rd card */}
                    <div data-aos='fade-up' data-aos-delay='500' className='text-center flex justify-center items-center flex-col gap-1 px-2'>
                        <p className='text-black font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                        <p className='text-5xl md:text-pink-800 text-pink-400 rotate-90 text-center translate-x-5'>.....</p>
                        <FaBus className='text-5xl md:text-pink-800 text-pink-400'/>
                    </div>

                    {/* 4th card */}
                    <div data-aos='fade-down' data-aos-delay='500' className='text-center flex justify-center items-center flex-col gap-1 px-3'>
                        <FaBus className='text-5xl md:text-pink-400 text-pink-800'/>
                        <p className='text-5xl md:text-pink-400 text-pink-800 rotate-90 text-center translate-x-5'>.....</p>
                        <p className='text-black font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ChooseUs