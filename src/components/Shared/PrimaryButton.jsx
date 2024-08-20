import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryButton = () => {
  return (
    <>
    <div className='flex items-center py-2'>
        <button className='bg-pink-800 font-semibold h-[40px] text-white px-3 py-2 '>Choose your Meal</button>
        <FaArrowRight className='inline-block cursor-pointer transform hover:!translate-x-2 duration-200 p-2 h-[40px] w-[40px] bg-pink-950 text-white'/>
    </div>
    </>
  )
}

export default PrimaryButton