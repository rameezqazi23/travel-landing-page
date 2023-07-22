import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: "Islan"
  },
  {
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: "Grandi",
  },
  {
    url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: "Rosting",

  },
  {
    url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    title: "Home Town"
  }
]

const ImagesSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)

  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    console.log("Current Index of next slide==>", newIndex)

  }

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)

  }


  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500' style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>

      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
      p-2 group-hover:bg-black/20 text-white cursor-pointer
      '>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />

      </div>

      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
      p-2 group-hover:bg-black/20 text-white cursor-pointer
      '>
        <BsChevronCompactRight onClick={nextSlide} size={30} />

      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={() => gotoSlide(slideIndex)}>
            <RxDotFilled />

          </div>
        ))}

      </div>

    </div>
  )
}

export default ImagesSection
