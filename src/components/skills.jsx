import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import reactJS from '../assets/react.png'; // Renamed from reactjs
import tailwind from '../assets/tailwind.png';
import py from '../assets/py.png';
import figma from '../assets/figma.png';
import ps from '../assets/ps.png';
import ai from '../assets/ai.png';

const Skills = () => {
  const techs = [
    { id: 1, src: html, title: 'HTML', style: 'shadow-red-800' },
    { id: 2, src: css, title: 'CSS', style: 'shadow-pink-800' },
    { id: 3, src: js, title: 'JavaScript', style: 'shadow-orange-800' },
    { id: 4, src: reactJS, title: 'ReactJS', style: 'shadow-blue-800' }, // Changed from reactjs to reactJS
    { id: 5, src: tailwind, title: 'TailwindCSS', style: 'shadow-cyan-800' },
    { id: 6, src: py, title: 'Python', style: 'shadow-green-800' },
    { id: 7, src: figma, title: 'Figma', style: 'shadow-purple-800' },
    { id: 8, src: ps, title: 'Photoshop', style: 'shadow-blue-500' },
    { id: 9, src: ai, title: 'Illustrator', style: 'shadow-yellow-800' },
  ];

  return (
    <div name="skills" className=''>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-b-gray-500 p-2 inline'>SKILLS</p>
          <p className='py-6 text-lg font-medium text-gray-600'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className='w-20 mx-auto' />
              <p className='mt-4 font-semibold'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
