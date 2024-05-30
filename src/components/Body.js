import React from 'react'

const Body = () => {
  return (
    <div className='mx-10'>
    {/* top part and slogan */}
<div className='flex pt-[170px] justify-start'>
    <div className='w-7/12  slide-in-left my-auto shadow-green-100 shadow-2xl '>
        <h1 className='w-full font-semibold text-8xl text-green-800 mt-5  border-none'>Don't Just Charge ELECTRA-FLOW <br /> your Vehicle</h1>
        <h1 className='text-3xl text-gray-700 my-8'>Powering Sustainable Future</h1>
    </div>
    <div className='rounded-[120px] mx-5 m-auto border overflow-hidden drop-shadow-2xl slide-in-right'>
        <img className='w-[500px] m-auto' src="https://i.pinimg.com/736x/aa/f3/2c/aaf32c22fcca7dfc71add1597c677bd5.jpg" alt="img" />
    </div>
</div>
</div>

  )
}

export default Body