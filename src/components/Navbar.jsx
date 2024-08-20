import React from 'react'
import {FaCaretDown} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'


const NavLinks=[
    {
        id: 1,
        name:'Home',
        link: "/#",
    },
    {
        id: 1,
        name:'About',
        link: "/#",
    },
    {
        id: 1,
        name:'Contact',
        link: "/#",
    },
];

const DropdownLinks=[
    {
        id: 1,
        name:'Vegetables',
        link: "/#",
    },
    {
        id: 2,
        name:'Fruits',
        link: "/#",
    },
    {
        id: 3,
        name:'Grains',
        link: "/#",
    },
];

const Navbar = () => {
  return (
    <>
        <div className='bg-red-300 shadow-sm'>
        <div className='container flex justify-between py-4 sm:py-3'>
            {/* logo section */}
            <div className='font-serif font-bold text-3xl bg-blue-400'>Logo</div>
            {/* Navlinks section */}
            <div className='bg-green-400'>
                <ul className='flex items-center gap-10 font-bold'>
                    {NavLinks.map(
                        (navlink)=>
                            <li key={navlink.id}>
                                <a className='inline-block hover:text-blue-700 text-xl font-semibold' href={navlink.link}>{navlink.name}</a>
                                </li>
                        
                    )}

            {/* Alternative way
                    {NavLinks.map(
                        ({id,name,link})=>{
                            <li key={id}>
                                <a href={link}>{.name}</a>
                                </li>
                        }
                    )} */}

                    {/* Simple dropdown and links */}
                    <li className='cursor-pointer group'>
                        <a className='inline-block hover:text-blue-700 text-xl font-semibold'>
                            <div className='flex items-center gap-[2px] py-2'>
                            Categories
                            <span><FaCaretDown className='group-hover:rotate-180 duration-300'/></span>
                            </div>
                        </a>
                        {/* Dropdown Section */}
                        <div className='absolute z-[9999] hidden group-hover:block w-[200px] p-2'>
                            <ul className='bg-pink-400 font-semibold rounded-md'>
                              {  DropdownLinks.map(
                                (dropdown)=><li key={dropdown.id} >
                                <a href={dropdown.link} className='text-lg inline-block w-full rounded-md p-2 hover:bg-pink-300'>{dropdown.name}</a>
                                </li>)}
                            </ul>
                        </div>
                    </li>

                    {/* Login Button */}
                    <li>
                        <button className='flex justify-center items-center gap-2 bg-pink-700 text-white text-lg py-2 px-3 rounded-xl hover:scale-105 duration-300'>
                            <FaUser/>
                            My Account
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        
    </>
  )
}

export default Navbar