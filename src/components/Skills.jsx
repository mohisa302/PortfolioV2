import React from 'react';
import HTML from '../assets/html.png';
import Sql from '../assets/icon4.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/icon5.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Ruby from '../assets/icon3.png';
import Back from '../assets/color-sharp3.png';

const Skills = () => (
    <div
      name="skills"
      className="w-full h-full bg-[#0a192f] text-gray-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-500 ">Skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sql} alt="HTML icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">PYTHON</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Ruby} alt="HTML icon" />
            <p className="my-4">Ruby</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
);

export default Skills;
