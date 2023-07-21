import React from 'react'

const PlanSection = () => {
    return (
        <div className='max-w-[1400px] m-auto px-4 py-16 grid lg:grid-cols-2 gap-4'>
            {/* Left Section */}
            <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
                <img className='row-span-3 object-cover w-full h-full p-2' src="/images/image-1.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="/images/image-1.jpg" alt="/" />
                <img className='row-span-2 object-cover w-full h-full p-2' src="/images/image-1.jpg" alt="/" />
                <img className='row-span-3 object-cover w-full h-full p-2' src="/images/image-1.jpg" alt="/" />
                <img className=' row-span-2 object-cover w-full h-full p-2' src="/images/image-1.jpg" alt="/" />

            </div>
            {/* Right Section */}
            <div className='flex flex-col'>
                <h3>Plan Your Next Trip</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati labore, quia velit et illum omnis officiis doloremque a architecto.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati labore, quia velit et illum omnis officiis doloremque a architecto.</p>

                <div>
                    <button>Learn More</button>
                    <button>Boook Your Trip</button>
                </div>
            </div>


        </div>
    )
}

export default PlanSection
