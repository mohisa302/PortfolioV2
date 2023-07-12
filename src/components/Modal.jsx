import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-20">
      <div className="lg:max-w-[700px] lg:h-[500px] lg:w-[700px] fixed top-[50%] left-[50%] flex flex-wrap md:flex-nowrap lg:flex-nowrap bg-white transform translate-x-[-50%] translate-y-[-50%] shadow-sm shadow-xs hover:shadow-md ">
        <img
          src={project.image}
          alt={project.name}
          className="object-cover w-full h-[200px] lg:h-full mt-8 lg:mt-0 md:mt-0 lg:w-[370px] md:w-[250px] p-2"
        />
        <div className="w-100">
          <button className="fixed top-[6px] text-black text-3xl right-[8px]" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="flex flex-col justify-center items-center w-100 h-100 lg:w-full md:mt-12  lg:mt-12 p-2">
            <p className="text-black text-sm lg:text-xl md:text-xl">{project.describe}</p>
            <div className="pt-8 text-center ">
              <a href={project.github} target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 border-solid border-2 border-gray-600
                  hover:bg-blue-900 hover:text-white text-gray-700 font-bold text-lg hover:border-none"
                >
                  Code
                </button>
              </a>

              <a href={project.live} target="_blank">
                <button
                  className="text-center rounded-lg px-4 py-3 m-2 border-solid border-2 border-gray-600
                  hover:bg-blue-900 hover:text-white text-gray-700 font-bold text-lg hover:border-none"
                >
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
