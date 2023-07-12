/* eslint-disable */

import React, { useState } from 'react';
import Modal from '../modals/Modal';
import data from '../data/data';
import Back2 from '../assets/color-sharp3.png';

const Work = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const projects = data;

  return (
    <div
      name="work"
      className="w-full pt-16 md:h-full h-fulls text-gray-300 bg-[#0a192f]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${Back2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500">Work</p>
          <p className="py-6"></p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
          {projects.map((item, index) => (
            <div key={index} className="bg-blue-900 h-full">
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">{item.name}</span>
                  <div className="pt-8 text-center">
                    <button
                      onClick={() => openModal(index)}
                      className="text-center z-[-1] rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    >
                      See Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-4 px-2 pb-2">
                <div className="flex justify-center flex-wrap gap-2">
                  {item.tech.map((techEl, techIndex) => (
                    <button
                      key={techIndex}
                      className="bg-transparent h-[40px] text-sm text-center flex items-center justify-center hover:bg-white-500 text-white-700 font-semibold hover:text-blue-900 px-4 border border-white-500 hover:border-transparent hover:bg-white rounded"
                    >
                      {techEl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProjectIndex !== null ? projects[selectedProjectIndex] : null}
      />
    </div>
  );
};

export default Work;
