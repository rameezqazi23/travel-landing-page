import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PlanSection = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <div className='max-w-[1400px] m-auto px-4 py-16 grid lg:grid-cols-2 gap-4'>
            {/* Left Section */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2 z-20' data-aos='fade-up' data-aos-duration="3000" src="/images/image-1.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2 z-20' data-aos='fade-up' data-aos-duration="3000" src="/images/image-1.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2 z-20' data-aos='fade-up' data-aos-duration="3000" src="/images/image-1.jpg" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2 z-20' data-aos='fade-up' data-aos-duration="3000" src="/images/image-1.jpg" alt="/" />
                <img className=' row-span-2 object-cover w-full h-full p-2 z-20' data-aos='fade-up' data-aos-duration="3000" src="/images/image-1.jpg" alt="/" />

            </div>
            {/* Right Section */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text6xl font-bold' data-aos="fade-down" data-aos-duration="2000">Plan Your Next Trip</h3>
                <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati labore, quia velit et illum omnis officiis doloremque a architecto.</p>
                <p className='pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati labore, quia velit et illum omnis officiis doloremque a architecto.</p>

                <div>
                    <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                    <button className='bg-black text-white hover:shadow-xl'>Boook Your Trip</button>
                </div>
            </div>


        </div>
    )
}

export default PlanSection
