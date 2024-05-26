import React from 'react'

const Header = () => {
  return (
    <header className='flex m-auto my-10 w-4/5 border border-black justify-between'>
        <div className=''>
            <img src='./logoev.jpg'></img>
        </div>
        <div className='flex-auto w-auto '  >
            
            <ul className='flex my-10'>
            <li >Home</li>
            <li className='px-5'>Be a Partner</li>
            <li className='px-5'>Product</li>
            <li className='px-5'>About Us</li>
            <li className='px-5'>Contact Us</li>
            <li className='px-5'>team</li>
            </ul>
            
        </div>
        <div className='flex-auto w-auto'>
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
