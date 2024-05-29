import React from 'react'

const Header = () => {
  return (
    <header className= 'header slide-in-top shadow-2xl z-50 drop-shadow-2xl fixed mx-[30px] border-t-green-900 border-t-12 p-3 rounded-b-3xl bg-green-50  text-md  flex flex-wrap my-6 w-[95%] border border-black justify-between'>
        
        <div className=' my-auto  rounded-lg h-4/5 '>
            <img className='h-16 rounded-lg ' src='https://t3.ftcdn.net/jpg/04/83/17/70/360_F_483177012_cwHfmtTjEMdbu2tbP0go5qA7zYjLlFyQ.jpg'></img>
        </div>
        <div className=' my-auto font-semibold '  >
            
            <ul className='hover:cursor-pointer w-auto flex flex-wrap justify-evenly my-auto'>
            <li className='mx-3 hover:text-green-900 '>Home</li>
            <li className='mx-3 hover:text-green-900'>Be a Partner</li>
            <li className='mx-3 hover:text-green-900'>Product</li>
            <li className='mx-3 hover:text-green-900'>About Us</li>
            <li className='mx-3 hover:text-green-900'>Contact Us</li>
            <li className='mx-3 hover:text-green-900'>team</li>
            </ul>
            
        </div> 
        <div className='my-auto font-semibold'>
            <ol>Call Us: <br /> +91-91327823278</ol>
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
