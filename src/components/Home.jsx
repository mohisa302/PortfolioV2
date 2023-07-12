/* eslint-disable */

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {
  FaBars, FaTimes, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Banner from '../assets/banner-bg.png';
import Resume from '../assets/Profile.pdf';

const Home = () => (
  <div
    name="home"
    className="bg-[#0a192f] w-full h-screen"
    style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {/* container */}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
      <p className="text-purple-500 text-2xl">Hi, my name is</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Mohi Sadeghi</h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
        I'm a Software Developer.
      </h2>
      <p className="text-[#8892b0] py-4 max-w-[700px]">
        I can help you build a product, feature or website Look through some of my work and experience! If you like
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
        {/* social icons */}
        <div className="flex lg:hidden top-[35%] left-0">
          <ul className="flex justify-start">
            <li className="h-[60px] flex justify-between items-center">
              <a
                href="https://www.linkedin.com/in/mohadese-sadeghi/"
                className="flex justify-between items-center w-full text-blue-500"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="h-[60px] flex justify-between items-center">
              {' '}
              <a
                href="https://github.com/mohisa302/"
                className="flex justify-between items-center w-full text-gray-300"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="h-[60px] flex justify-between items-center">
              {' '}
              <a
                href="mailto:mohisadeghi302@gmail.com"
                className="flex justify-between items-center w-full text-green-500"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center">
              {' '}
              <a
                href={Resume}
                download="resume.pdf"
                className="flex justify-between items-center w-full text-cyan-500"
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
