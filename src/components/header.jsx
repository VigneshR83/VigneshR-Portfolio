import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className='max-w-screen-lg mx-auto p-4'> 
        <div className='flex flex-col gap-5 -mt-10 sm:flex-row justify-between items-center'>
          <div>
            <img src={Logo} alt="Logo" className='h-auto w-36 mt-12'/>
          </div>
            <div>
              <nav>
                <ul className='nav-links flex gap-8 font-semibold text-lg sm:text-xl select-none'>
                  <li><a className='hover:text-blue-500 duration-300 cursor-pointer'>Home</a></li>
                  <li><a className='hover:text-blue-500 duration-300 cursor-pointer'>Skills</a></li>
                  <li><a className='hover:text-blue-500 duration-300 cursor-pointer'>About Me</a></li>
                  <li><a className='hover:text-blue-500 duration-300 cursor-pointer'>Contact</a></li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header
