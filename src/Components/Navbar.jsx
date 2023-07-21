import React, { useState } from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'

const Navbar = () => {
    const [navView, setNavView] = useState(false)
    const handleNaview = ()=>{
        setNavView(!navView)
        if(!navView){
            document.body.style.overflow="hidden"
        }else{
            document.body.style.overflow="scroll"
        }
    }

    return (
        <div className='flex w-full absolute justify-between p-4 items-center'>
            <h1 className='text-2xl text-white font-bold z-20'>Navbar</h1>
            <AiOutlineMenuFold onClick={handleNaview} className='z-20 text-white cursor-pointer' size={25} />
            <div className={navView ? ' ease-in-out delay-150 duration-500 fixed text-gray-800 right-0 top-0 w-full h-screen px-4 py-7 flex-col z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30' :
                'absolute top-0 h-screen right-[-100%] ease-in-out delay-150 duration-500 z-10'}>
                <ul className='flex flex-col fixed justify-center items-center w-full h-full'>
                    <li className='font-bold text-3xl p-8'>Home</li>
                    <li className='font-bold text-3xl p-8'>Destination</li>
                    <li className='font-bold text-3xl p-8'>Reservation</li>
                    <li className='font-bold text-3xl p-8'>Amenities</li>
                    <li className='font-bold text-3xl p-8'>Rooms</li>
                    <li className='font-bold text-3xl p-8'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
