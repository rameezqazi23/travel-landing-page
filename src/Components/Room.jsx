import React from 'react'

const Room = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 px-4 lg:mb-[20%] md:mb-[35%] grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1  col-span-2'>
            <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis enim explicabo temporibus libero. Quos error assumenda adipisci nihil corrupti illo!</p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="/" />
            <img className='row-span-2 object-cover w-full h-full' src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
            <img className='object-cover w-full h-full' src="https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="/" />
        </div>
      
    </div>
  )
}

export default Room

