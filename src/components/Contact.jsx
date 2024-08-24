import React from 'react';
import {IoLocationSharp} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';
import {FaPhone} from 'react-icons/fa';


const Contact = () => {
  return (
    <>
    <div className='mt-20 text-white'>
        <div data-aos='fade-down' className="container p-10 sm:p-12 bg-gradient-to-b from-pink-500 to-pink-800 rounded-t-3xl">
            
            {/* Heading Section */}
                <h1 data-aos='fade-up' data-aos-delay='300' className=' text-2xl sm:text-3xl text-center font-bold py-10'>Contact Us</h1>
                
                {/* Grid Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6'>

                    {/* Location Section */}
                    <div data-aos='fade-right' data-aos-delay='500' className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <IoLocationSharp className='text-3xl sm:text-5xl '/>
                        </div>
                        <p>Lorem ipsum dolor sit <br/> Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    {/* Email Section */}
                     <div data-aos='fade-right' data-aos-delay='700' className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <MdEmail className='text-4xl sm:text-5xl '/>
                        </div>
                        <p>info@goodfood.com <br/>hr@goodfood.com</p>
                    </div>

                    {/* Contact Number Section */}
                     <div data-aos='fade-right' data-aos-delay='900' className='text-center space-y-4'>
                        <div className='flex justify-center'>
                            <FaPhone className='text-2xl sm:text-4xl '/>
                        </div>
                        <p>021-32187673 - Sales and Services</p>
                        <p>021-13246244 - Hiring Queries</p>
                        <p>021-87352745 - Whatsapp</p>
                    </div>
                </div>
                <div className='pt-5 font-thin text-gray-300 flex sm:justify-between items-center'>
                    <p className='text-sm sm:text-xl'>© 2024 GoodFood. All rights reserved.</p>
                    <div className='text-sm sm:text-xl flex gap-6 items-center'>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & conditions</a>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Contact