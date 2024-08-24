import React from 'react';
import apple from '../assets/apple.png'
import avocados from '../assets/avocados.png'
import tomato from '../assets/tomato.png'
import lemon from '../assets/lemon.png'
import carrot from '../assets/carrot.png'
import PrimaryButton from './Shared/PrimaryButton';


const Banner = () => {
  return (
    <>
    <div className="container py-16 relative">
        <div className='mt-8 sm:mt-0 relative z-20 '>
            <h1 data-aos='fade-up' data-aos-delay='300' className='pt-8 tracking-wider text-2xl sm:3xl font-bold text-center text-black'>Taste the Healthy Difference</h1>
    
        {/* Text Content section */}
        <div className='space-y-10'>
            <div data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                <div>
                    <p>Lorem ipsum dolor sit amet <span className='text-pink-800'>consectetur</span> adipisicing elit. Alias corporis natus quae. Error vel id quas ipsum vero ducimus nostrum fugit! Ipsa accusantium magni illo. Saepe earum dolorem aperiam consequuntur.</p>
                </div>
            </div>


            <div data-aos='fade-up' data-aos-delay='300' className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                <div></div>
                <div>
                    <p>Lorem ipsum dolor sit amet <span className='text-pink-800'>consectetur</span> adipisicing elit. Alias corporis natus quae. Error vel id quas ipsum vero ducimus nostrum fugit! Ipsa accusantium magni illo. Saepe earum dolorem aperiam consequuntur.</p>
                </div>
            </div>

        </div>

        {/* Button Section */}

        <div className='flex justify-center mt-10 sm:mt-14'>
            <PrimaryButton/>
        </div>
        </div>

        {/* Bg fruits images */}
        <div data-aos='fade-right' className='absolute top-4 left-6 sm:bottom-0 sm:left-10 sm:top-12 opacity-70 sm:opacity-100'>
            <img src={lemon} className='max-w-[160px]' style={{ height: '5rem' }} alt="" />
        </div>

        <div data-aos='fade-right' className='absolute top-4 right-6 sm:bottom-0 sm:right-10 sm:top-12 opacity-70 sm:opacity-100'>
            <img src={tomato} className='max-w-[160px]' style={{ height: '7rem' }} alt="" />
        </div>

        <div data-aos='fade-left' className='absolute bottom-4 left-6 sm:left-20 sm:bottom-48 opacity-70 sm:opacity-100'>
            <img src={avocados} className='max-w-[160px]' style={{ height: '7rem' }} alt="" />
        </div>

         <div data-aos='fade-left' className='absolute bottom-4 right-6 sm:right-20 sm:bottom-4 opacity-70 sm:opacity-100'>
            <img src={carrot} className='max-w-[160px]' style={{ height: '8rem' }} alt="" />
        </div>

        <div data-aos='fade-right' className='absolute top-auto bottom-96 right-36 sm:right-60 sm:top-52 opacity-55 sm:opacity-100'>
            <img src={apple} className='max-w-[160px]' style={{ height: '6rem' }} alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner