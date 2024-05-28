import React from 'react'

const Body = () => {
  return (
    <div className='flex pt-[170px]  justify-around'>
        <div className='w-8/12  mx-5'>
            <h1 className=' w-full  font-semibold   text-7xl text-green-700'>Don't Charge ELECTRA-FLOW your Vehicle </h1>
            <h1 className='text-3xl text-gray-700 my-5 text-left ml-[20px]'>Powering Sustainable Future</h1>
        </div>
        <div className='rounded-[100px] mx-5 m-auto border border-black overflow-hidden'> 
            <img className='w-[500px]  m-auto ' src="https://i.pinimg.com/736x/aa/f3/2c/aaf32c22fcca7dfc71add1597c677bd5.jpg" alt="img" />
        </div>
    </div>
  )
}

export default Body