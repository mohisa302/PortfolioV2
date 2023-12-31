import React from 'react';
import Back2 from '../assets/color-sharp.png';

const About = () => (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${Back2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-left text-4xl font-bold inline border-b-4 border-purple-500">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold text-left">
            <p>Hi. I'm Mohi, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            I am passionate about building excellent software that improves
            the lives of those around me. I specialize in creating software
            for clients ranging from individuals and small businesses
            to large enterprise corporations.
            </p>
          </div>
        </div>
      </div>
    </div>
);

export default About;
