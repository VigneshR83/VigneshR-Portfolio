import React from 'react';
import chair from '../assets/chair.png';

const Home = () => {
  return (
    <section>
      <div className='max-w-screen-lg mx-auto p-4 sm:px-12 flex flex-col sm:flex-row gap-4 items-center'>
        <div className='container sm:m-0'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Hello, I'm Vignesh R,</h1>
          <div className='bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl md:mt-2'>Frontend Developer</h1>
          </div>
          <p className='text-gray-500 text-sm sm:text-lg mt-2 md:text-xl md:mt-4'>A passionate Frontend Developer weaving digital dreams into reality.
            with a keen eye for design and a knack for coding, I bring ideas to
            life with pixel-perfect precision.</p>
          <button className='w-auto md:mt-5 md:text-xl uppercase h-10 hover:scale-105 bg-blue-500 px-4 rounded-md font-semibold text-white mt-3 duration-300 hover:shadow-md'>download cv</button>
        </div>
        <div>
          <img src={chair} alt="Chair" className='m-auto w-[230px] sm:w-[320px] md:w-[420px]' />
        </div>
      </div>
    </section>
  );
};

export default Home;
