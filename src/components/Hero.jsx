import React from 'react'
import HeroImage from '../assets/HeroImage.png'
import PrimaryButton from './Shared/PrimaryButton'
import HeroBg from '../assets/HeroBg.jpg'
const BgStyle={
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    width:"100%",
    height:"100%"
}
const Hero = () => {
  return (
    <>
    <div style={BgStyle} className='relative z-[1] bg-blue-400'>
        <div className='container py-16 sm:py-0 '>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] '>
                {/* text content section */}
                    <div className= 'font-semibold space-y-7 text-black order-2 sm:order-1'>
                        <h1 data-aos='fade-up' className='text-3xl md:text-5xl'>Fresh & Healthy Meal Plan <span className='text-pink-800 text-5xl md:text-7xl font-GreyQo font-bold'>Delivery</span> in Miami</h1>
                        <p data-aos='fade-up' data-aos-delay='300' className='lg:pr-64 text-lg md:text-2xl'>Delicious Meals Delivered to Your Door from $132.95 per week</p>

                {/* button section */}
                <div data-aos='fade-up' data-aos-delay='500'>
                    <PrimaryButton/>
                </div>
                    </div>
                {/* image section */}
                <div data-aos='zoom-in' data-aos-delay='500' className='relative z-30 order-1 sm:order-2'>
                    <img src={HeroImage} alt="Hero Image" style={{height:'20rem'}} className='w-full sm:scale-125 sm:translate-y-[-0.5]'/>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Hero
