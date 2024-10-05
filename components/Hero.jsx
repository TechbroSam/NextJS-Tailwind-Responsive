import React from 'react';

const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='relative z-[2] p-5 text-white text-center'>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold tracking-wide'>
          {heading}
        </h2>
        <p className='py-5 text-base sm:text-lg md:text-xl lg:text-2xl'>
          {message}
        </p>
        <button className='px-8 py-2 mt-4 border text-sm md:text-base'>
          Book
        </button>
      </div>
    </div>
  );
};

export default Hero;
