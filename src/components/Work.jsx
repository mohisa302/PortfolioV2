import React from 'react';
import { data } from '../data/data.js';

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500">Work</p>
          <p className="py-6"></p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <>
              <div className="bg-blue-900 h-full">
                <div
                  key={index}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
                >
                  {/* Hover effect for images */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">{item.name}</span>
                    <div className="pt-8 text-center ">
                      {/* eslint-disable-next-line */}
                      <a href={item.github} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                        >
                          See Project
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4 px-2 pb-2">
                  <div className="flex justify-center flex-wrap gap-2">
                    {item.tech.map((techEl, techIndex) => (
                      <button
                        key={techIndex}
                        className="bg-transparent h-[40px] text-sm text-center flex items-center justify-center hover:bg-white-500 text-white-700 font-semibold hover:text-blue-900
                        px-4 border border-white-500 hover:border-transparent hover:bg-white rounded"
                      >
                        {techEl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
