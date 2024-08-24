import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
const LoginPopup = ({showPopup,setshowpopup}) => {
  return (
    <>
    {
    showPopup && 
    (<div>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-pink-200 rounded-md duration-200 w-[300px]'>
            {/* header section */}
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-bold text-black'>Login</h1>
                </div>
                <div>
                    <IoCloseOutline className='text-2xl cursor-pointer' onClick={()=>setshowpopup(false)}/>
                </div>
            </div>

            {/* Login form section */}
            <div className='mt-4'>
                <label className='ml-1'>Email</label>
                <input type="email" placeholder='Enter your email' className='mt-2 w-full p-2 rounded-md border mb-4 border-pink-300 shadow-md' />

                <label className='ml-1'>Password</label>
                 <input type="password" placeholder='Enter password' className='mt-2 w-full p-2 rounded-md border mb-4 border-pink-300 shadow-md' />

                <div className='flex justify-center mt-3'>
                 <button className='text-center w-2/6 border-2 border-pink-300 bg-gradient-to-l from-pink-300 to-pink-400 hover:from-pink-400 hover:to-pink-600 hover:border-white hover:text-white p-2 rounded-lg ' onClick={()=>setshowpopup(false)}>Login</button>
                 </div>
            </div>
        </div>
        </div>
    </div>)
    }
    </>
  )
}

export default LoginPopup