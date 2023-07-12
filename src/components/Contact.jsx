import React from 'react';
import Footer from '../assets/color-sharp2.png';

const Contact = () => (
    <div
      name="contact"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${Footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form method="POST" action="https://formspree.io/f/moqbgdbk" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300">Contact</p>
        </div>
        <input className="bg-[#ccd6f6] p-2 " type="text" placeholder="Name" name="name" required />
        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" required />
        <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message" required></textarea>
        <button className="text-white border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
);

export default Contact;
