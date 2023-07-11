import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-purple-500 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mohi Sadeghi</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Software Developer.</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I can help you build a product , feature or website Look through some of my work and experience! If you like
          what you see and have a project you need coded, don’t hestiate to contact me.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:text-purple-500 hover:border-purple-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
