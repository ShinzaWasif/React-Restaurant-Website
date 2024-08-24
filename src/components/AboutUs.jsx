import React from 'react'
import AboutBg from '../assets/AboutBg.jpg'
import VectorWave from '../assets/VectorWave.png'
import { FaUser } from 'react-icons/fa'

const BgStyle={
    backgroundImage: `url(${AboutBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    width:"100%",
    height:"100%"
}
const AboutUs = ({handlePopup}) => {
  return (
    <>
    <div style={BgStyle} className='relative py-14'>
        
        <div className="container pt-4 min-h-[500px] relative z-10">
            <h1 data-aos='zoom-in' data-aos-delay='300' className='pt-20 tracking-wider text-2xl sm:text-4xl font-bold text-white text-center'>About Us</h1>
        
             {/* card section */}
            <div data-aos='fade-up' data-aos-delay='500' className='bg-white/70 p-10 my-10 text-md sm:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi similique officiis inventore repellendus molestiae fuga nobis autem? Magni, autem doloribus? Amet quae dicta numquam impedit eius cumque beatae deleniti sapiente, quam laudantium animi doloribus aspernatur ipsa voluptatibus dolorem ea nulla optio facere, dolor maiores tempora quod accusantium incidunt? Dolores, voluptates consequuntur ab at id ipsam!
            <div className='mt-10 flex justify-center'>
                <button onClick={handlePopup} className='flex justify-center items-center gap-2 bg-pink-700 text-white text-md sm:text-lg py-2 px-3 rounded-xl hover:scale-105 duration-300'>
                 <FaUser/> My Account</button>
                 </div>
            </div>
        </div>

        {/* Vector Wave */}
        <div className='absolute left-0 -top-8 w-full'>
            <img src={VectorWave} style={{ height: '10rem'}} alt="" className='w-full'/>
        </div>
    </div>
    </>
  )
}

export default AboutUs