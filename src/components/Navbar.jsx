import React from 'react'

function Navbar() {
    return (
        <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
            <div className="left flex items-center space-x-3">
                <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
                <h2 className="logo font-bold text-2xl text-white text-center">MovieMaSala</h2>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
