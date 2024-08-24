import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryButton = () => {
  return (
    <>
    <div className='flex items-center sm:py-2'>
        <button className='bg-pink-800 font-semibold h-[30px] text-[12px] sm:text-lg sm:h-[40px] text-white px-3 py-1 sm:py-2'>Choose your Meal</button>
        <FaArrowRight className='inline-block cursor-pointer transform hover:!translate-x-2 duration-200 p-2 h-[30px] sm:h-[40px] w-[40px] bg-pink-950 text-white'/>
    </div>
    </>
  )
}

export default PrimaryButton