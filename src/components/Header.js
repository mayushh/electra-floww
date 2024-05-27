import React from 'react'

const Header = () => {
  return (
    <header className='border-t-green-900 border-t-8 p-3 rounded-b-3xl bg-green-100  text-md font-semibold flex flex-wrap m-auto my-10 w-4/5 border border-black justify-between'>
        <div className=' my-auto rounded-lg h-4/5 '>
            <img className='h-20 rounded-lg ' src='https://t3.ftcdn.net/jpg/04/83/17/70/360_F_483177012_cwHfmtTjEMdbu2tbP0go5qA7zYjLlFyQ.jpg'></img>
        </div>
        <div className=' my-auto '  >
            
            <ul className='hover:cursor-pointer w-auto flex flex-wrap justify-evenly my-auto'>
            <li className='mx-3 '>Home</li>
            <li className='mx-3 '>Be a Partner</li>
            <li className='mx-3'>Product</li>
            <li className='mx-3'>About Us</li>
            <li className='mx-3'>Contact Us</li>
            <li className='mx-3'>team</li>
            </ul>
            
        </div>
        <div className='my-auto'>
            <ol>Contact us on 89493849</ol>
            <div>
                <img></img>
                <img></img>
                <img></img>
            </div>
        </div>
    </header>
  )
}

export default Header
