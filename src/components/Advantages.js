import React from 'react'

const Advantages = () => {
  return (
    <div className='mx-10 text-start px-24'>
        
        <div className='flex justify-around'>
            <div className='w-3/5'>
                <p>Why Choose Us ?</p>
                <p className='font-semibold text-6xl text-green-900'>"The Advantages You Can't Ignore"</p>
                <div >
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Modern EV Solutions Tailored to fit your needs</p>
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Technological advancement</p>
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Modern EV Solutions Tailored to fit your needs</p>
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Technological advancement</p>
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Advanced CMS</p>
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Eco-Friendly Commitment</p>
                    <p className='text-2xl m-4 my-10 text-gray-700 font-semibold '>Responsive Customer Support</p>
                </div>

            </div>
            <div className='overflow-hidden w-2/5 '>
                <img src="https://i.pinimg.com/736x/f4/0f/99/f40f992f0e7d342eb0382d8694d74076.jpg" alt="img" />
                <div className='flex w-[100%]'><button className='my-5 mx-auto  shadow-2xl shadow-red-700 hover:bg-red-900 font-bold p-4 rounded-full border border-gray-50 bg-gray-800 text-white'>About Us</button></div>
                
            </div>
        </div>
    </div>
  )
}

export default Advantages